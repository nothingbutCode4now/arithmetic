const { add } = require("../arithmetica");


test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('3 + 4 is equal to 7', () => {
    expect(add(3, 4)).toBe(7);
});

test('110 + 5 is equal to 115', () => {
    expect(add(110, 5)).toBe(115);
});