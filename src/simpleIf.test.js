import simpleIf from './simpleIf';

describe('simpleIf', () => {
  it('gives even when value is even', () => {
    expect(simpleIf(4)).toBe('even');
  });

  it('gives odd when the value is odd', () => {
    expect(simpleIf(3)).toBe('odd');
  });
})
