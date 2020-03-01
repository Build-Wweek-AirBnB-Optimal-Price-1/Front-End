import {axiosWithAuth} from '../utils/axiosWithAuth';

// Credentials is an object with username and password properties
export const register = (credentials) => {
    axiosWithAuth()
      .post('/api/register', credentials)
      .then(res => {
        //Saves the auth token in localstorage to be used in listing requests
        window.localStorage.setItem('token', res.data.payload)
        history.push('/listings')
      })
}

//Same as above, takes an object with username and password
export const login = (credentials) => {
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        //Saves the auth token in localstorage to be used in listing requests
        window.localStorage.setItem('token', res.data.payload)
        history.push('/listings')
      })
}

