import React from 'react';
import Toggle from '../../providers/Toggle';

const WelcomePage = () => {
  return (
    <div>
      <Toggle render={({toggle, isToggle})=>(<div>
        <span onClick={()=>toggle()}>Toggle</span>
        <span onClick={()=>toggle(true)}>Show</span>
        <span onClick={()=>toggle(false)}>Close</span>
        {isToggle && <div>
          Siemano co tam.
        </div>}
      </div>)} />
    </div>
  );
};

export default WelcomePage;