import React from 'react';
import {render} from '@testing-library/react';
import Color, { getColor } from './Color';
import theme from '../../../theme/theme';

describe('atoms/text/Color component', ()=>{

  it('getColor() helper works fine',()=>{
    expect(getColor('black')).toBe(theme.colors.black);
    expect(getColor('violet')).toBe(theme.colors.violet);
    expect(getColor(undefined)).toBe(theme.colors.default);
    expect(getColor(null)).toBe(theme.colors.default);
    expect(getColor({})).toBe(theme.colors.default);
    expect(getColor(/violet/g)).toBe(theme.colors.default);
    expect(getColor('non existing color')).toBe(theme.colors.default);
  });

  it('render properly',()=>{
    const { container } = render(<Color variant="violet" />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('has good color',()=>{
    const text = 'Text that\'ll be tested';
    const { getByText, rerender } = render(<Color variant="violet">{text}</Color>);
    expect( getByText(text) ).toHaveStyle(`color: ${theme.colors.violet}`);
    rerender(<Color variant="black">{text}</Color>);
    expect( getByText(text) ).toHaveStyle(`color: ${theme.colors.black}`);
  });

  it('renders as block',()=>{
    const text = 'Text that\'ll be tested';
    const { getByText } = render(<Color variant="violet" isBlock={true}>{text}</Color>);
    expect( getByText(text) ).toHaveStyle(`display: block`);
  });

});