export function mergeSort<T>(unsorted: T[], compare: (a: T, b: T) => number): T[] {

    function merge(s1: T[], s2: T[]): T[] {
        const sorted: T[] = [];
        let i = 0, j = 0;
        while (i < s1.length && j < s2.length) {
            if (compare(s1[i], s2[j]) < 0) {
                sorted.push(s1[i]);
                i++;
            } else {
                sorted.push(s2[j]);
                j++;
            }
        }
        if (i < s1.length) {
            sorted.push(...s1.slice(i));
        }
        if (j < s2.length) {
            sorted.push(...s2.slice(j));
        }
        return sorted;
    }

    function sort(arr: T[]): T[] {
        const length = arr.length;
        if (length <= 1) {
            return [...arr];
        }
        const left: T[] = sort(arr.slice(0, length >>> 1));
        const right: T[] = sort(arr.slice(length >>> 1));
        return merge(left, right);
    }

    return sort(unsorted);
}