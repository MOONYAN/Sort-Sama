function quickSort(arr: number[]) {

    const swap = (a: number, b: number) => {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    const partition = (start: number, end: number): number => {

        const pivot: number = arr[end];
        let nextIdx: number = start;

        for (let i = start; i < end; i++) {
            if (arr[i] < pivot) {
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
quickSort(testcase1);
console.log(testcase1);