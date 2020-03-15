import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

const GlobalUserDataContext = createContext();

const URL = 'http://www.mocky.io/v2/5e0de1893300002b00aa88f3';

export const GlobalUserDataProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  const [err, setErr] = useState(false);

  const getIdsByName = filterBy => userData.filter(e=>{
    // filter by first and last name
    const name = e.first_name + ' ' + e.last_name;
    return name.toLowerCase().indexOf(filterBy.toLowerCase())!==-1;
    // TODO: filter by first&last name in reversed order
  }).map(
    e => e.id// separate id only
  );

  const getIdsByJobTitle = filterBy => userData.filter(
    e => e.job_title.toLowerCase().indexOf(filterBy.toLowerCase())!==-1
  ).map(
    e => e.id
  );

  const getById = id => userData.find(e=>e.id===id);

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

  return(<GlobalUserDataContext.Provider value={{userData, getIdsByName, getIdsByJobTitle, getById, isProjectManager}}>
    {userData !== null && children}
    {err && `Unable to download userData (${err})`}
  </GlobalUserDataContext.Provider>);
};

const useGlobalUserData = () => {
  const {userData, getIdsByName, getIdsByJobTitle, getById, isProjectManager} = useContext(GlobalUserDataContext);

  return {
    data: userData,
    getIdsByName,
    getIdsByJobTitle,
    getById,
    isProjectManager,
  };
};

export default useGlobalUserData;