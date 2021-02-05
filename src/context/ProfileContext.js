import React, {createContext, useReducer, useEffect, useContext} from 'react'
import axios from 'axios'
import ProfileReducer from './reducers/ProfileReducer';
import { AuthContext } from './AuthContext';

export const ProfileContext = createContext();

export default function ProfileContextProvider(props) {
  const [profiles, dispatch] = useReducer(ProfileReducer, [])
  const {auth} = useContext(AuthContext)
  const allProfile = async () => {
   const allData = await axios.get('http://localhost:4000/api/profile/all');
   console.log(allData.data)
   if(allData) {
     dispatch({
       type: 'ALL_PROFILE',
       payload: allData.data
     })
   }
  }

  const myProfile = async () => {
    const data = await axios.get('http://localhost:4000/api/profile');
    if(data) {
      console.log('data: ', data)
      dispatch({
        type: 'MY_PROFILE',
        payload: data.data
      })
    }
  }

  useEffect(()=>{
    allProfile();
    myProfile();
  }, [])
  return (
    <ProfileContext.Provider value={{profiles}}>
      {props.children}
    </ProfileContext.Provider>
  )
}
