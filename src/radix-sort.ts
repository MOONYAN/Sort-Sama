export function radixSort<T>(arr: T[], k: number, scatters: Array<(val: T) => number>) {

    class Bucket {

        private container: T[] = [];

        append(val: T) {
            this.container.push(val);
        }

        fetch(): T[] {
            return this.container;
        }
    }

    function initBuckets(): Bucket[] {
        let bs: Bucket[] = Array(k);
        for (let i = 0; i < k; i++) {
            bs[i] = new Bucket();
        }
        return bs;
    }

    scatters.forEach(s => {
        let buckets = initBuckets();
        arr.forEach(v => buckets[s(v)].append(v));
        let gathers: T[] = buckets.reduce((p, b) => p.concat(b.fetch()), [] as T[]);
        gathers.forEach((v, idx) => arr[idx] = v);
    })
}