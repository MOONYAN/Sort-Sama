export function simpleQuickSort<T>(unsorted: T[], compare: (a: T, b: T) => number): T[] {

    function sort(arr: T[]): T[] {

        if (arr.length === 0) {
            return [];
        }

        const pivot = arr[0];
        let greater: T[] = [];
        let less: T[] = [];
        for (let i = 1; i < arr.length; i++) {
            const val: T = arr[i];
            if (compare(val, pivot) > 0) {
                greater.push(val);
            } else {
                less.push(val);
            }
        }
        return [...sort(less), pivot, ...sort(greater)];
    }

    return sort(unsorted);
}