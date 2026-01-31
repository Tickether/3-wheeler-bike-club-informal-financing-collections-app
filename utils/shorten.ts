export function shortenTxt(
    txt?: string,
    frontSlice = 18,
    backSlice = 9
): string {
    if (!txt) return '';
    if (txt.length < frontSlice + backSlice) return txt;
    return txt.slice(0, frontSlice) + '...' + txt.slice(-backSlice);
}
  

export function shortenAddress(
    txt?: string,
    frontSlice = 9,
    backSlice = 9
): string {
    if (!txt) return '';
    if (txt.length < frontSlice + backSlice) return txt;
    return txt.slice(0, frontSlice) + '...' + txt.slice(-backSlice);
}
  

export function getWeeksFromStartDate(startDate: Date): number {
    const now = new Date()
    const diffMs = now.getTime() - startDate.getTime()
    const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000))
    return Math.max(1, diffWeeks + 1)
}