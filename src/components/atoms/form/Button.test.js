import {render} from '@testing-library/react';
import React from 'react';
import Button from './Button';
import theme from '../../../theme/theme';

const { colors, sizes } = theme;

describe('Button atom', () => {

  it('should render properly', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with assigned color/bg', () => {
    const { container, rerender } = render(<Button isSmall variant="red" color="gray" />);
    expect( container.querySelector('button') ).toHaveStyle(`background-color: ${colors.red}; color: ${colors.gray}; height: ${sizes.sm}px`);
    rerender(<Button color="white" />);
    expect( container.querySelector('button') ).toHaveStyle(`background-color: ${colors.default}; color: ${colors.white}; height: ${sizes.xl}px`);
    rerender(<Button variant="green" color="default" />);
    expect( container.querySelector('button') ).toHaveStyle(`background-color: ${colors.green}; color: ${colors.default};`);
  });

});