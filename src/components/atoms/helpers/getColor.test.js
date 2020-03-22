import theme from '../../../theme/theme';
import getColor from './getColor';

const { colors } = theme;

describe('helper function', () => {

  it('getColor() works fine', () => {
    expect(getColor('asfgsuyfsfsfdwe23regw4rfs')).toBe(colors.default);
    expect(getColor({})).toBe(colors.default);
    expect(getColor(null)).toBe(colors.default);
    expect(getColor(()=>{})).toBe(colors.default);
    expect(getColor(undefined)).toBe(colors.default);
    expect(getColor(23)).toBe(colors.default);
    expect(getColor([])).toBe(colors.default);
    expect(getColor('red')).toBe(colors.red);
    expect(getColor(/violet/g)).toBe(colors.default);
  });


});

