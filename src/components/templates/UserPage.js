import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../atoms/text/Heading';
import Avatar from '../atoms/Avatar';
import Header from '../atoms/interface/Header';

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  > div {
    width: 100%;
  }
`;

const InfoWrapper = styled.section`
  width: 45%;
  overflow: auto;
`;

const MapWrapper = styled.section`
  width: 55%;
  > div {
    width: 100%;
    height: 100%;
  }
`;


const Content = styled.section`
  text-align: center;
`;



const Footer = styled.footer`

`;


const UserPageTemplate = ({ header, avatarSrc, userName, contactInfo, footer, map, ...props}) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Header>{header}</Header>
        <Content>
          <Avatar src={avatarSrc} size="xxl"/>
          <Heading>{userName}</Heading>
          <div>
            {contactInfo}
          </div>
        </Content>
        <Footer>
          {footer}
        </Footer>
      </InfoWrapper>
      <MapWrapper>
        {map}
      </MapWrapper>
    </Wrapper>
  );
};

UserPageTemplate.propTypes = {
  header: PropTypes.node,
  avatarSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  description: PropTypes.string,
  contactInfo: PropTypes.node,
  footer: PropTypes.node,
  map: PropTypes.node,
};

export default UserPageTemplate;