export function countingSort<T>(arr: T[], k: number, key: (val: T) => number): T[] {

    let counter: number[] = Array(k).fill(0);

    arr.forEach(v => counter[key(v)]++);

    let prefixSum = Array(k).fill(0);

    for (let i = 1; i < k; i++) {
        prefixSum[i] = prefixSum[i - 1] + counter[i - 1];
    }

    let sorted: T[] = Array(arr.length);
    arr.forEach(v => {
        const idx = prefixSum[key(v)];
        sorted[idx] = v;
        prefixSum[key(v)]++;
    });

    return sorted;
}