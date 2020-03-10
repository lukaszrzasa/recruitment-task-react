import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

const GlobalUserDataContext = createContext();

export const GlobalUserDataProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  const [err, setErr] = useState(false);

  const getData = async () => {
    await axios.get('http://www.mocky.io/v2/5e0de1893300002b00aa88f3').then(({data}) => {
      setUserData([null, ...data]);
    }).catch((err) => {
      setErr(err);
    });
  };
  useEffect(()=>{
    getData();
  },[]);

  return(<GlobalUserDataContext.Provider value={[userData]}>
    {userData !== null && children}
    {err && `Unable to download userData (${err})`}
  </GlobalUserDataContext.Provider>);
};

const useGlobalUserData = () => {
  const [userData] = useContext(GlobalUserDataContext);

  return userData;
};

export default useGlobalUserData;