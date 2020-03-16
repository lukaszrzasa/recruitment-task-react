import React from 'react';
import ColumnWrapper from '../atoms/interface/ColumnWrapper';
import PropTypes from 'prop-types';
import ColumnHeader from './ColumnHeader';
import ColumnFooter from '../atoms/interface/ColumnFooter';


const Column = ({icon, heading, children, footer}) => {
  return (
    <ColumnWrapper>
      <ColumnHeader heading={heading} icon={icon} />
      {children}
      {footer && <ColumnFooter>{footer}</ColumnFooter>}
    </ColumnWrapper>
  );
};

Column.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  footer: PropTypes.node.isRequired,
};

export default Column;