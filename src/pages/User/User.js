import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import useGlobalUserData from '../../hooks/useUsersData';
import UserPageTemplate from '../../components/templates/UserPage';
import Button from '../../components/atoms/form/Button';
import Icon from '../../components/atoms/text/Icon';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Error from '../../components/templates/Error';
import {useDispatch, useSelector} from 'react-redux';
import Task from '../../components/organisms/Task';
import {listNames} from '../../store/listOrderReducer';
import {clearFilterList} from '../../store/actions';

const Header = () => {
  const dispatch = useDispatch();
  return <Button
    onClick={ () => dispatch(clearFilterList()) }
    variant="gray"
    color="white"
    as={Link}
    to="/"
  >
    <Icon icon="arrow-left"/>
  </Button>;
};

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

// split for testing
export const flattenArrayOfArrays = (arr) => arr.reduce((acc, curr) => [...curr, ...acc]  , []);

export const filterByUserId = (arr, userId) => arr.filter(e => e.userId===userId);

export const addIndexAndColumnId = (arr, columnId) => arr.map( (e, index) => ({ ...e, index, columnId }) );

export const separateTasksByUserId = (items, userId) => flattenArrayOfArrays(
  listNames.map(
    key => filterByUserId(
      addIndexAndColumnId(items[key], key),
      userId,
    )
  )
);
// export const separateTasksByUserId = (items, userId) => listNames.map( // convert object of arrays --to--> array to arrays
//     key => items[key].map( // each key of object
//       ( e, index ) => ( { ...e, index, columnId: key } ) // add helper variable -> index (order) && columnId
//     ).filter(e => e.userId===userId) // find all elements for specific user
//   ).reduce((acc, curr) => [...curr, ...acc]  , []); // flatten array


const Footer = ({userId}) => {
  const items = useSelector(({listItems}) => listItems);
  const itemsFlatten = separateTasksByUserId(items, userId);
  return (<>
    {itemsFlatten.map( ( { columnId, index, ...item }, i )=><Task
      key={i}
      isDragging={false}
      item={item}
      columnId={columnId}
      index={index}
    />)}
  </>);
};



const UserPage = () => {
  const { getById } = useGlobalUserData();
  const { id } = useParams();
  const user = getById(id);

  if(!user) return <Error
    backTo="/"
    errMsg="Nie znaleziono użutkownika."
  />;

  const {
    avatar,
    first_name, last_name,
    lat, lng,
    job_title,
    description,
    email,
    street,
    city
  } = user;
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
      footer={<Footer userId={user.id}/>}
    />
  );
};

export default UserPage;