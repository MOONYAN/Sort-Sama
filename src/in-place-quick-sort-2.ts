export function inPlaceQuickSort2<T>(arr: T[], compare: (a: T, b: T) => number) {

    function swap(i: number, j: number) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function partition(left: number, right: number): number {
        let pivot: T = arr[(left + right) >>> 1];
        while (true) {
            while (compare(arr[left], pivot) <= 0) {
                left++;
            }
            while (compare(arr[right], pivot) > 0) {
                right--;
            }
            if (left >= right) {
                return right;
            }
            swap(left, right);
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