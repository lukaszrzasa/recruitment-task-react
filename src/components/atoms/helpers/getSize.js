import theme from '../../../theme/theme';

const { sizes } = theme;

const getSize = (size) => {
  if(Object.keys(sizes).indexOf(size)===-1) return sizes.md;
  return sizes[size];
};

export default getSize;