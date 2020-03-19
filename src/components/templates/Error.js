import React from 'react';
import PropTypes from 'prop-types';
import Header from '../atoms/interface/Header';
import {Link} from 'react-router-dom';
import Icon from '../atoms/text/Icon';
import Button from '../atoms/form/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const ErrMsg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -250px;
  width: 500px;
  height: 100px;
  text-align: center;
  font-size: 30px;
  line-height: 50px;
`;

const ErrorTemplate = ({backTo, errMsg}) => {
  return (
    <Wrapper>
      <Header>
        <Button variant="gray" color="white" as={Link} to={backTo}><Icon icon="arrow-left"/></Button>
        <ErrMsg>{errMsg}</ErrMsg>
      </Header>
    </Wrapper>
  );
};

ErrorTemplate.propTypes = {
  backTo: PropTypes.string.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default ErrorTemplate;