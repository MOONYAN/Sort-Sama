import { bucketSort as sort } from '../bucket-sort';

test('in: empty', () => {

    let testcase: number[] = [];
    sort(testcase, 1, (a, b) => a - b, v => 0);
    let expected: number[] = [];

    expect(testcase).toEqual(expected);
});

test('in: single element', () => {
    // [x:87]
    let testcase = [87];
    sort(testcase, 1, (a, b) => a - b, v => v - 87);
    let expected = [87];

    expect(testcase).toEqual(expected);
});

test('in: same element', () => {
    // [x:87]
    let testcase = [87, 87, 87, 87];
    sort(testcase, 1, (a, b) => a - b, v => v - 87);
    let expected = [87, 87, 87, 87];

    expect(testcase).toEqual(expected);
});

test('in: ascending', () => {
    // [x:85-88]
    let testcase = [85, 86, 86, 87];
    sort(testcase, 4, (a, b) => a - b, v => v - 85);
    let expected = [85, 86, 86, 87];

    expect(testcase).toEqual(expected);
});

test('in: descending', () => {
    // [x:85-88]
    let testcase = [87, 86, 86, 85];
    sort(testcase, 4, (a, b) => a - b, v => v - 85);
    let expected = [85, 86, 86, 87];

    expect(testcase).toEqual(expected);
});

test('in: random', () => {
    // [x:0-15]
    let testcase = [9, 4, 1, 6, 7, 3, 8, 2, 5];
    sort(testcase, 4, (a, b) => a - b, v => v >>> 2);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(testcase).toEqual(expected);
})