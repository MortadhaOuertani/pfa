import axios from 'axios'
import config from '../../util/config';
import { ERRORS, SET_PROFILE, SET_PROFILES, DELETE_PROFILE } from '../type';

export const AddProfile = (form, setShow, setMessage,Navigate)=>dispatch=>{
    axios
      .post("http://localhost:3700/api/profile",form , config(localStorage.getItem('jwt')))
      .then(res => {
        Navigate("/blog")
        setShow(true)
        setMessage("User added with success")
        dispatch({
            type: ERRORS,
            payload: {}
        })
        setTimeout(() => {
            setShow(false)
        }, 4000);
    })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetProfile = ()=>dispatch=>{
    axios
      .get("http://localhost:3700/api/profile",)
      .then(res => {
          dispatch({
              type: SET_PROFILE,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetProfiles = ()=>dispatch=>{
   console.log(localStorage.getItem('jwt'))
    axios
      .get("http://localhost:3700/api/profiles")
      .then(res => {
        console.log(res.data)
          dispatch({
              type: SET_PROFILES,
              payload: res.data
          })
      })
      .catch(err => {
        console.log(err)

          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const DeleteProfile = (id)=>dispatch=>{
   if(window.confirm("are you sure to delete this user?")){
    axios
    .delete(`http://localhost:3700/api/admin/${id}`,config(localStorage.getItem('jwt')))
    .then(res => {
        dispatch({
            type: DELETE_PROFILE,
            payload: id
        })
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    });
   }
}