import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Error from '../components/templates/Error';
import FullScreenLoading from '../components/organisms/FullScreenLoading';

const GlobalUserDataContext = createContext();

const URL = 'http://www.mocky.io/v2/5e0de1893300002b00aa88f3';

export const GlobalUserDataProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  const [err, setErr] = useState(false);

  const getAllByName = (filterBy, allowWithoutJobTitle) => userData.filter(e => {
    if(!e.job_title && !allowWithoutJobTitle) return false;
    // filter by first and last name
    const name = e.first_name + ' ' + e.last_name;
    return name.toLowerCase().indexOf(filterBy.toLowerCase())!==-1;
  });
  const getAllByJobTitle = (filterBy, allowWithoutJobTitle) => userData.filter(e => {
    if(!e.job_title) {
      if(!allowWithoutJobTitle) return false;
      return filterBy.length===0;
    }
    return e.job_title.toLowerCase().indexOf(filterBy.toLowerCase())!==-1;
  });

  const getIdsByName = (filterBy) => getAllByName(filterBy).map(e => e.id);

  const getIdsByJobTitle = filterBy => userData.filter(
    e => e.job_title.toLowerCase().indexOf(filterBy.toLowerCase())!==-1
  ).map(
    e => e.id
  );

  // eslint-disable-next-line eqeqeq
  const getById = id => userData.find(e=>e.id == id);

  const isProjectManager = id => {
    if(id){
      const user = getById(id);
      if(user && user.job_title === 'Project Manager')
        return true;
    }
    return false;
  };

  const getData = async () => {
    try {
      const req = await axios.get(URL);
      const data = req.data;
      setUserData([...data]);
    } catch (err) {
      setErr(err);
    }
  };
  useEffect(()=>{
    getData();
  },[]);

  return(<GlobalUserDataContext.Provider value={{userData, getIdsByName, getIdsByJobTitle, getById, isProjectManager, getAllByName, getAllByJobTitle}}>
    {userData !== null && children}
    {userData === null && <FullScreenLoading>Trwa ładowanie informacji o użytkownikach</FullScreenLoading>}
    {err && <Error backTo="/" errMsg={`Unable to download userData (${err})`} />}
  </GlobalUserDataContext.Provider>);
};

const useGlobalUserData = () => {
  const {
    userData,
    getIdsByName,
    getIdsByJobTitle,
    getById,
    isProjectManager,
    getAllByName,
    getAllByJobTitle,
  } = useContext(GlobalUserDataContext);

  return {
    data: userData,
    getIdsByName,
    getIdsByJobTitle,
    getById,
    isProjectManager,
    getAllByName,
    getAllByJobTitle,
  };
};

export default useGlobalUserData;