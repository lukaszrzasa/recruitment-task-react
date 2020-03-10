import React from 'react';
import { render } from '@testing-library/react';
import Toggle from './Toggle';


describe('Toggle provider', ()=>{

  it('should mount properly',()=>{
    const renderFn = jest.fn();
    render(<Toggle render={renderFn}/>);
    expect(renderFn).toHaveBeenCalled();
  });

  it('should toggle works properly',()=>{
    let isToggle;
    let toggle;
    const renderFn = jest.fn((props)=>{
      isToggle = props.isToggle;
      toggle = props.toggle;
    });
    render(<Toggle render={renderFn}/>);
    expect(isToggle).toBe(true);
    toggle();
    expect(isToggle).toBe(false);
    toggle();
    expect(isToggle).toBe(true);
    toggle(true);
    expect(isToggle).toBe(true);
    toggle(false);
    expect(isToggle).toBe(false);
  });

  it('toggle got wrong prop type',()=>{
    let isToggle;
    let toggle;
    const renderFn = jest.fn((props)=>{
      isToggle = props.isToggle;
      toggle = props.toggle;
    });
    render(<Toggle render={renderFn}/>);
    expect(isToggle).toBe(true);
    toggle('string');
    expect(isToggle).toBe(true);
    toggle({});
    expect(isToggle).toBe(true);
    toggle(undefined);
    expect(isToggle).toBe(false);//undefined === null O.o
  });

});