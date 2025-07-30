export function generateOrderId(prefix = "ORD") {
    return `${prefix}-${Date.now()}`;
}
