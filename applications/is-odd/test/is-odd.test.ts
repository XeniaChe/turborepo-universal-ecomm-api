import { isEven } from 'is-even';

describe('Generic test', () => {
  it('For 4 should be TRUE', () => {
    const result: boolean = isEven(4);
    expect(result).toBe(true);
  });

  it('For 5 should be FALSE', () => {
    const result: boolean = isEven(5);
    expect(result).toBe(false);
  });
});
