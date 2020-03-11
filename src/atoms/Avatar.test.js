import React from 'react';
import {render} from '@testing-library/react';
import Avatar, {getSize, sizes} from './Avatar';

describe('atoms/Avatar component', ()=>{

  it('getSize() helper works fine',()=>{
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

  it('render properly',()=>{
    const { container } = render(<Avatar size="xs" />)
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