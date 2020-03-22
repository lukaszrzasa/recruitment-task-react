import React from 'react';
import {render} from '@testing-library/react';
import Avatar from './Avatar';
import theme from '../../../theme/theme';

const { sizes } = theme;

describe('atoms/Avatar component', ()=>{

  it('render properly',()=>{
    const { container } = render(<Avatar size="xs" />);
    expect(container.firstChild).toMatchSnapshot()
  });
  it('has good size',()=>{
    const { container, rerender } = render(<Avatar size="xs" />);
    expect( container.querySelector('img') ).toHaveStyle(`width: ${sizes.xs}px`);
    rerender(<Avatar size="md" />);
    expect( container.querySelector('img') ).toHaveStyle(`width: ${sizes.md}px`);
    rerender(<Avatar size="xl" />);
    expect( container.querySelector('img') ).toHaveStyle(`width: ${sizes.xl}px`);
  });

});