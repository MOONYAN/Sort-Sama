function quickSort0<T>(unsorted: T[], compare: (a: T, b: T) => number): T[] {

    function swap(arr: T[], i: number, j: number) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

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


let testcase = [87, 86, 85, 87];
console.log(quickSort0(testcase, (a, b) => a - b));