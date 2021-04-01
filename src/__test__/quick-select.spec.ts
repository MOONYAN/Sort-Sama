import { quickSelect as select } from '../quick-select';

test('in: single element', () => {

    let testcase = [87];
    const k = 0;
    const expected = 87;
    const actual = select(testcase, k, (a, b) => a - b);

    expect(actual).toBe(expected);
})

test('in: same element', () => {

    let testcase = [87, 87, 87, 87];
    const k = 2;
    const expected = 87;
    const actual = select(testcase, k, (a, b) => a - b);

    expect(actual).toBe(expected);
})

test('in: ascending', () => {

    let testcase = [85, 86, 86, 87];
    const k = 3;
    const expected = 87;
    const actual = select(testcase, k, (a, b) => a - b);

    expect(actual).toBe(expected);
})

test('in: descending', () => {

    let testcase = [87, 86, 86, 85];
    const k = 3;
    const expected = 87;
    const actual = select(testcase, k, (a, b) => a - b);

    expect(actual).toEqual(expected);
})

test('in: random', () => {

    let testcase = [9, 4, 1, 6, 7, 3, 8, 2, 5];
    const k = 4;
    const expected = 5;
    const actual: number = select(testcase, k, (a, b) => a - b);

    expect(actual).toEqual(expected);
})