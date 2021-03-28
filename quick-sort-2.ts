function quickSort2(arr: number[]) {

    function swap(i: number, j: number) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function partition(left: number, right: number): number {
        let pivot = arr[(left + right) >>> 1];
        while (true) {
            while (arr[left] <= pivot) {
                left++;
            }
            while (arr[right] > pivot) {
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

let testcase = [87, 86, 85, 87];
quickSort2(testcase);
console.log(testcase);