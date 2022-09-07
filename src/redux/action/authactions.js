import axios from 'axios';
import { ERRORS, SET_USER } from '../type';
import jwt_decode from 'jwt-decode';
import store from '../store'



export const Registration = (form,Navigate)=>dispatch=>{
    axios.post('http://localhost:3700/api/register',form)
    .then(res=>{
        Navigate('/signin')
        
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}
export const LoginAction = (form, navigate)=>dispatch=>{
    axios.post('http://localhost:3700/api/login', form) 
    .then(res=>{
      const {token} = res.data
      localStorage.setItem('jwt', token)
      const decode = jwt_decode(token)
      dispatch(setUser(decode))
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}
export const Logout=()=>dispatch=>{
    localStorage.removeItem('jwt')
dispatch({
    type:SET_USER,
    payload: {}
}) 
}

export const setUser=(decode)=>({
    type:SET_USER,
    payload:decode,
})