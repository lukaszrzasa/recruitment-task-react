import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  constructor(){
    super();
    this.state = {
      isToggle:true
    }
  }

  render(){
    const toggle = (valueToSet = null) => {
      this.setState(prevState => ({
        ...prevState,
        isToggle: valueToSet===null ? !prevState.isToggle : !!valueToSet,
      }))
    };

    const renderProps = {
      isToggle: this.state.isToggle,
      toggle,
    };

    return (<>
      {this.props.render(renderProps)}
    </>);
  }
}

Toggle.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Toggle;