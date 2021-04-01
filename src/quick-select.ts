export function quickSelect<T>(arr: T[], k: number, compare: (a: T, b: T) => number): T {

    function swap(i: number, j: number) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function partition(start: number, end: number): number {
        const pivot = arr[end];
        let nextIdx = start;

        for (let i = start; i < end; i++) {
            if (compare(arr[i], pivot) <= 0) {
                swap(i, nextIdx);
                nextIdx++;
            }
        }
        swap(end, nextIdx);
        return nextIdx;
    }

    function select(start: number, end: number): T {
        const pos: number = partition(start, end);
        if (pos === k) {
            return arr[pos];
        }
        return (pos > k) ? select(start, pos - 1) : select(pos + 1, end);
    }

    return select(0, arr.length - 1);
}