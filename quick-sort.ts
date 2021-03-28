function quickSort<T>(arr: T[], compare: (a: T, b: T) => number) {

    const swap = (i: number, j: number) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    const partition = (start: number, end: number): number => {

        const pivot: T = arr[end];
        let nextIdx: number = start;

        for (let i = start; i < end; i++) {
            if (compare(arr[i], pivot) <= 0) {
                swap(i, nextIdx);
                nextIdx++;
            }
        }
        swap(nextIdx, end);

        return nextIdx;
    }

    const sort = (start: number, end: number) => {

        if (start < end) {
            const pos: number = partition(start, end);
            sort(start, pos - 1);
            sort(pos + 1, end);
        }
    };

    sort(0, arr.length - 1);
}

let testcase1 = [9, 4, 1, 6, 7, 3, 8, 2, 5];
quickSort(testcase1, (a, b) => a - b);
console.log(testcase1);