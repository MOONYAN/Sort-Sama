import { simpleQuickSort as sort } from '../simple-quick-sort';

test('in: empty', () => {

    let testcase: number[] = [];
    let result: number[] = sort(testcase, (a, b) => a - b);
    let expected: number[] = [];

    expect(result).toEqual(expected);
});

test('in: single element', () => {

    let testcase = [87];
    let result = sort(testcase, (a, b) => a - b);
    let expected = [87];

    expect(result).toEqual(expected);
});

test('in: same element', () => {

    let testcase = [87, 87, 87, 87];
    let result = sort(testcase, (a, b) => a - b);
    let expected = [87, 87, 87, 87];

    expect(result).toEqual(expected);
});

test('in: ascending', () => {

    let testcase = [85, 86, 86, 87];
    let result = sort(testcase, (a, b) => a - b);
    let expected = [85, 86, 86, 87];

    expect(result).toEqual(expected);
});

test('in: descending', () => {

    let testcase = [87, 86, 86, 85];
    let result = sort(testcase, (a, b) => a - b);
    let expected = [85, 86, 86, 87];

    expect(result).toEqual(expected);
});

test('in: random', () => {

    let testcase = [9, 4, 1, 6, 7, 3, 8, 2, 5];
    let result = sort(testcase, (a, b) => a - b);
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(result).toEqual(expected);
})