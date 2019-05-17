describe('sample', () => {
  test('add', () => {
    const add = jest.fn((a, b) => a + b);
    expect(add(1, 1)).toBe(2);
  });
});
