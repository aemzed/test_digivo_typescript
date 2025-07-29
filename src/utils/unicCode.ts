export const generateUnicCode = (used: Set<number>): number => {
    const available = Array.from({ length: 10 }, (_, i) => i + 1).filter(k => !used.has(k));
    if (available.length === 0) throw new Error("Semua kode unik terpakai");
    return available[Math.floor(Math.random() * available.length)];
};
