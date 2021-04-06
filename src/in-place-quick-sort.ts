export function inPlaceQuickSort<T>(arr: T[], compare: (a: T, b: T) => number) {

    function swap(i: number, j: number) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function partition(start: number, end: number): number {

        swap((start + end) >>> 1, end);
        const pivot: T = arr[end];
        let nextIdx: number = start;

        for (let i = start; i < end; i++) {
            if (compare(arr[i], pivot) < 0) {
                swap(i, nextIdx);
                nextIdx++;
            }
        }
        swap(nextIdx, end);

        return nextIdx;
    }

    function sort(start: number, end: number) {

        if (start < end) {
            const pos: number = partition(start, end);
            sort(start, pos - 1);
            sort(pos + 1, end);
        }
    };

    sort(0, arr.length - 1);
}