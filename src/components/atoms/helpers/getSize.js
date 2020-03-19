import theme from '../../../theme/theme';

const { sizes } = theme;

const getSize = (size) => {
  console.log(size, sizes[size], Object.keys(sizes), Object.keys(sizes).indexOf(size));
  if(Object.keys(sizes).indexOf(size)===-1) return sizes.md;
  return sizes[size];
};

export default getSize;