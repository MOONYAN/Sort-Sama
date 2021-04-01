export function inPlaceQuickSort2<T>(arr: T[], compare: (a: T, b: T) => number) {

    function swap(i: number, j: number) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function partition(left: number, right: number): number {

        let pivot: T = arr[left];

        let i = left + 1, j = right;

        while (true) {
            while (compare(arr[i], pivot) <= 0) {
                i++;
            }
            while (compare(arr[j], pivot) > 0) {
                j--;
            }
            if (i >= j) {
                swap(left, j);
                return j;
            }
            swap(i, j);
        }
    }

    function sort(start: number, end: number) {
        if (start < end) {
            const pos = partition(start, end);
            sort(start, pos - 1);
            sort(pos + 1, end);
        }
    }

    sort(0, arr.length - 1);
}