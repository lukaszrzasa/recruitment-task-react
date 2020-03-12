import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../atoms/text/Heading';

const Wrapper = styled.main`
  
`;

const Info = styled.section`

`;

const MapWrapper = styled.section`

`;

const Header = styled.header`
  
`;

const Content = styled.section`
  
`;

const Avatar = styled.img`

`;


const Footer = styled.footer`

`;


const UserPageTemplate = ({ header, avatarSrc, userName, contactInfo, footer, map, ...props}) => {
  return (
    <Wrapper>
      <Info>
        <Header>{header}</Header>
        <Content>
          <Avatar src={avatarSrc}/>
          <Heading>{userName}</Heading>
          <div>
            {contactInfo}
          </div>
        </Content>
        <Footer>
          {footer}
        </Footer>
      </Info>
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