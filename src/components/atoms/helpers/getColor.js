import theme from '../../../theme/theme';

export const getColor = (variant) => {
  if(Object.keys(theme.colors).indexOf(variant)===-1) return theme.colors.default;
  return theme.colors[variant];
};

export default getColor;