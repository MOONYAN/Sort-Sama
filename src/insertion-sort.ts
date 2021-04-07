export function insertionSort<T>(arr: T[], compare: (a: T, b: T) => number) {

    function insert(end: number, val: T) {
        for (let i = end; i >= 0; i--) {
            if (compare(arr[i], val) > 0) {
                arr[i + 1] = arr[i];
            } else {
                arr[i + 1] = val;
                return;
            }
        }
        arr[0] = val;
    }

    function sort() {
        for (let i = 1; i < arr.length; i++) {
            const pivot: T = arr[i];
            insert(i - 1, pivot);
        }
    }

    sort();
}