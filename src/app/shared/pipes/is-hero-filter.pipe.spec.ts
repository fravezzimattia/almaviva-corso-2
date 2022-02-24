import { IsHeroFilterPipe } from './is-hero-filter.pipe';

describe('IsHeroFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new IsHeroFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
