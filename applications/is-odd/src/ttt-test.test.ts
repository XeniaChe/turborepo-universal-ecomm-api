import { ddd } from './ttt';

describe('Test from /src ', () => {
  it('Should be 48409', () => {
    const res: number = ddd;

    expect(res).toBe(48409);
  });
});
