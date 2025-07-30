const registeredWebhooks: string[] = [];

export function registerWebhook(url: string) {
    if (!registeredWebhooks.includes(url)) {
        registeredWebhooks.push(url);
    }
}

export function getRegisteredWebhooks(): string[] {
    return registeredWebhooks;
}
