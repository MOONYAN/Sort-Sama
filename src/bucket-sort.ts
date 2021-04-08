export function bucketSort<T>(arr: T[], k: number, compare: (a: T, b: T) => number, scatter: (v: T) => number) {

    class Bucket {

        private container: T[] = [];

        append(val: T) {
            this.container.push(val);
        }

        fetch(): T[] {
            return this.container;
        }

        sort() {
            this.container.sort(compare);
        }
    }

    let buckets: Bucket[] = Array(k);

    for (let i = 0; i < k; i++) {
        buckets[i] = new Bucket();
    }

    arr.forEach(v => buckets[scatter(v)].append(v));

    buckets.forEach(b => b.sort());

    let gathers: T[] = buckets.reduce((p, b) => p.concat(b.fetch()), [] as T[]);

    gathers.forEach((v, idx) => arr[idx] = v);
}