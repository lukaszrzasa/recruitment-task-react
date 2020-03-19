import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../atoms/text/Heading';
import Avatar from '../atoms/interface/Avatar';
import Header from '../atoms/interface/Header';
import Color from '../atoms/text/Color';
import Paragraph from '../atoms/text/Paragraph';
import Icon from '../atoms/text/Icon';
import {Link} from 'react-router-dom';
import {TextButton} from '../atoms/form/Button';
import {batch, useDispatch} from 'react-redux';
import {setFilterListMode, setFilterListValue} from '../../store/actions';

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
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 100%;
`;

const MapWrapper = styled.section`
  width: 55%;
  > div {
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  max-width: 500px;
  margin: 30px auto 0;
`;

const Content = styled.section`
  text-align: center;
  margin-bottom: 30px;
`;

const StyledIcon = styled(Icon)`
  font-size: ${({theme})=> theme.sizes.lg}px;
  display: block;
  margin: 5px auto;
`;


const Footer = styled.footer`
  background-color: #eee;
  padding: 30px 10px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 310px;
    margin:5px;
  }
`;


const UserPageTemplate = ({ header, avatarSrc, userName, jobTitle, contactInfo, description, footer, map, ...props}) => {

  const dispatch = useDispatch();

  return (
    <Wrapper {...props}>
      <InfoWrapper>
        <Header>{header}</Header>
        <Content>
          <Avatar src={avatarSrc} size="xxl"/>
          <Heading>{userName}</Heading>
          <Color variant="violet"><i>{jobTitle}</i></Color>
          <Description>{description}</Description>
          <Description>
            {contactInfo && contactInfo.map(({icon, text},i)=><div key={i}>
              <StyledIcon icon={icon} />
              <Paragraph>{text}</Paragraph>
            </div>)}
          </Description>
        </Content>
        <Footer>
          {!footer && <>
            <Heading size="lg">
              <strong>Przypisane zadania:</strong>
            </Heading>
            <FooterContent>
              {footer}
            </FooterContent>
            <TextButton
              as={Link}
              to="/"
              onClick={() => batch(()=> {
                dispatch(setFilterListMode('user'));
                dispatch(setFilterListValue(userName));
              })}
              variant="gray"
              color="white"
              isSmall
            >
              Pokaż wszystkie przypisane
            </TextButton>
          </>}
          {!footer && <Paragraph>
            Nie znaleziono żadnych zadań przypisanych do tego użytkownika.
          </Paragraph>}
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
  contactInfo: PropTypes.array,
  footer: PropTypes.node,
  map: PropTypes.node,
};

export default UserPageTemplate;