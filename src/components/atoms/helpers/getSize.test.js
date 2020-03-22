import getSize from './getSize';
import theme from '../../../theme/theme';

const { sizes } = theme;

describe('helper function', () => {

  it('getSize() works fine',() => {
    expect(getSize('xs')).toBe(sizes.xs);
    expect(getSize('md')).toBe(sizes.md);
    expect(getSize('xl')).toBe(sizes.xl);
    expect(getSize('fds')).toBe(sizes.md);
    expect(getSize(false)).toBe(sizes.md);
    expect(getSize()).toBe(sizes.md);
    expect(getSize({})).toBe(sizes.md);
    expect(getSize(undefined)).toBe(sizes.md);
    expect(getSize(null)).toBe(sizes.md);
    expect(getSize(4)).toBe(sizes.md);
  });

});

