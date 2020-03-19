import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import useGlobalUserData from '../../hooks/useUsersData';
import UserPageTemplate from '../../components/templates/UserPage';
import Button from '../../components/atoms/form/Button';
import Icon from '../../components/atoms/text/Icon';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Error from '../../components/templates/Error';

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



const UserPage = ({}) => {
  const { getById } = useGlobalUserData();
  const { id } = useParams();
  const user = getById(id);
  if(!user) return <Error
    backTo="/"
    errMsg="Nie znaleziono użutkownika."
  />
  const { first_name, last_name, lat, lng, avatar, job_title, description, email, street, city } = user;
  const position = [lat, lng];
  const zoom = 13;

  const contactInfo = [
    { icon: 'at', text: email },
    { icon: 'map-marker-alt', text: `${street}, ${city}` },
  ];

  return (
    <UserPageTemplate
      avatarSrc={avatar}
      jobTitle={job_title}
      description={description}
      userName={`${first_name} ${last_name}`}
      contactInfo={contactInfo}
      map={<MapContainer position={position} zoom={zoom} />}
      header={<Header/>}
    />
  );
};

export default UserPage;