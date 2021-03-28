import { inPlaceQuickSort as sort } from '../in-place-quick-sort';

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