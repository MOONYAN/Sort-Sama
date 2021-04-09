import { countingSort as sort } from '../counting-sort';

test('in: empty', () => {
    // [k:0]
    let testcase: number[] = [];
    let result: number[] = sort(testcase, 1, v => 0);
    let expected: number[] = [];

    expect(result).toEqual(expected);
});

test('in: single element', () => {
    // [k:0]
    let testcase = [87];
    let result = sort(testcase, 1, v => v - 87);
    let expected = [87];

    expect(result).toEqual(expected);
});

test('in: same element', () => {
    // [k:0]
    let testcase = [87, 87, 87, 87];
    let result = sort(testcase, 1, v => v - 87);
    let expected = [87, 87, 87, 87];

    expect(result).toEqual(expected);
});

test('in: ascending', () => {
    // [k:0-2]
    let testcase = [85, 86, 86, 87];
    let result = sort(testcase, 3, v => v - 85);
    let expected = [85, 86, 86, 87];

    expect(result).toEqual(expected);
});

test('in: descending', () => {
    // [k:0-2]
    let testcase = [87, 86, 86, 85];
    let result = sort(testcase, 3, v => v - 85);
    let expected = [85, 86, 86, 87];

    expect(result).toEqual(expected);
});

test('in: random', () => {
    // [k:0-8]
    let testcase = [9, 4, 1, 6, 7, 3, 8, 2, 5];
    let result = sort(testcase, 9, v => v - 1);
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(result).toEqual(expected);
})