import axios from "axios";
import { signPayload, encryptPayload } from "./cryptoUtils";

interface RetryItem {
    url: string;
    payload: any;
    retries: number;
}

const MAX_RETRIES = 3;

export async function sendWebhook(url: string, payload: any, retries = 0) {
    const encrypted = encryptPayload(payload);
    const signature = signPayload(payload);

    try {
        await axios.post(url, { data: encrypted }, {
            headers: {
                "x-signature": signature,
                "Content-Type": "application/json"
            },
            timeout: 5000
        });
        console.log(`✅ Webhook sent to ${url}`);
    } catch (error) {
        console.log(`❌ Webhook to ${url} failed. Retry ${retries + 1}`);
        if (retries < MAX_RETRIES) {
            setTimeout(() => {
                sendWebhook(url, payload, retries + 1);
            }, 5 * 60 * 1000); 
        } else {
            console.log(`🚨 Webhook to ${url} failed after ${MAX_RETRIES} attempts`);
        }
    }
}
