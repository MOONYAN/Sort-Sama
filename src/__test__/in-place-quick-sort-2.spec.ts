import { inPlaceQuickSort2 as sort } from '../in-place-quick-sort-2';

test('in: empty', () => {

    let testcase: number[] = [];
    sort(testcase, (a, b) => a - b);
    let expected: number[] = [];

    expect(testcase).toEqual(expected);
});

test('in: single element', () => {

    let testcase = [87];
    sort(testcase, (a, b) => a - b);
    let expected = [87];

    expect(testcase).toEqual(expected);
});

test('in: same element', () => {

    let testcase = [87, 87, 87, 87];
    sort(testcase, (a, b) => a - b);
    let expected = [87, 87, 87, 87];

    expect(testcase).toEqual(expected);
});

test('in: ascending', () => {

    let testcase = [85, 86, 86, 87];
    sort(testcase, (a, b) => a - b);
    let expected = [85, 86, 86, 87];

    expect(testcase).toEqual(expected);
});

test('in: descending', () => {

    let testcase = [87, 86, 86, 85];
    sort(testcase, (a, b) => a - b);
    let expected = [85, 86, 86, 87];

    expect(testcase).toEqual(expected);
});

test('in: random', () => {

    let testcase = [9, 4, 1, 6, 7, 3, 8, 2, 5];
    sort(testcase, (a, b) => a - b);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(testcase).toEqual(expected);
})