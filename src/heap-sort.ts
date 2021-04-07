export function heapSort<T>(arr: T[], compare: (a: T, b: T) => number) {

    class Heap {

        private heap: T[];
        private counter = 0;

        constructor(private size: number) {
            // idx:[1,N]
            this.heap = Array(size + 1);
        }

        push(val: T) {
            this.counter++;
            this.heap[this.counter] = val;
            this.buttonUp();
        }

        pop(): T {
            const val: T = this.heap[1];
            this.heapify();
            return val;
        }

        private swap(i: number, j: number) {
            let heap = this.heap;
            [heap[i], heap[j]] = [heap[j], heap[i]];
        }

        private buttonUp() {
            let heap = this.heap;
            for (let idx = this.counter; idx > 1; idx >>>= 1) {
                const parent = idx >>> 1;
                if (compare(heap[idx], heap[parent]) < 0) {
                    this.swap(idx, parent);
                } else {
                    return;
                }
            }
        }

        private heapify() {
            let heap = this.heap;
            heap[1] = heap[this.counter];
            this.counter--;

            for (let idx = 1; ;) {
                const left = idx * 2;
                const right = left + 1;
                const min = [left, right].reduce((p, v) => (v <= this.counter && compare(heap[v], heap[p]) < 0) ? v : p, idx);
                if (min != idx) {
                    this.swap(min, idx);
                    idx = min;
                } else {
                    return;
                }
            }
        }
    }

    const length = arr.length;
    let heap = new Heap(length);
    arr.forEach(v => heap.push(v));
    let sorted: T[] = [];

    for (let i = 0; i < length; i++) {
        arr[i] = heap.pop();
    }

    return sorted;
}