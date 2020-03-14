import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import useGlobalUserData from '../../hooks/useUsersData';
import UserPageTemplate from '../../components/templates/UserPage';
import Button from '../../components/atoms/form/Button';
import Icon from '../../components/atoms/text/Icon';
import {Link} from 'react-router-dom';

const Header = ()=><>
  <Button variant="gray" color="white" as={Link} to="/"><Icon icon="arrow-left"/></Button>
</>;

const MapContainer = ({position, zoom}) => {
  return <Map center={position} zoom={zoom}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </Map>;
};



const UserPage = () => {
  const userData = useGlobalUserData();
  const position = [userData[2].lat, userData[5].lng];
  const zoom = 13;
  return (
    <UserPageTemplate
      avatarSrc="https://via.placeholder.com/300x300"
      userName="Pawian Wielki"
      map={<MapContainer position={position} zoom={zoom} />}
      header={<Header/>}
    />
  );
};

export default UserPage;