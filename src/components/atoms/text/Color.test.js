import React from 'react';
import {render} from '@testing-library/react';
import Color from './Color';
import theme from '../../../theme/theme';

const { colors } = theme;

describe('atoms/text/Color component', ()=>{

  it('render properly',()=>{
    const { container } = render(<Color variant="violet" />);
    expect(container.firstChild).toMatchSnapshot()
  });

  it('has good color',()=>{
    const text = 'Text that\'ll be tested';
    const { getByText, rerender } = render(<Color variant="violet">{text}</Color>);
    expect( getByText(text) ).toHaveStyle(`color: ${colors.violet}`);
    rerender(<Color variant="black">{text}</Color>);
    expect( getByText(text) ).toHaveStyle(`color: ${colors.black}`);
  });

  it('renders as block',()=>{
    const text = 'Text that\'ll be tested';
    const { getByText } = render(<Color variant="violet" isBlock={true}>{text}</Color>);
    expect( getByText(text) ).toHaveStyle(`display: block`);
  });

});