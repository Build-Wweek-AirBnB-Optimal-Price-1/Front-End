import {axiosWithAuth} from '../utils/axiosWithAuth';


// Credentials is an object with username and password properties
export const registerAction = (credentials, setSignupError) => {
    axiosWithAuth()
      .post('/api/register', credentials)
      .then(res => {
        //Saves the auth token in localstorage to be used in listing requests
        window.localStorage.setItem('token', res.data.payload);
        //Replaces current history item with listings to encourage the user not to navigate back to login page until they click a logout button and clear their auth token
        window.history.replace('/listings');
      })
      .catch(err => setSignupError(err))
}

//Same as above, takes an object with username and password
export const loginAction = (credentials, setLoginError) => {
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        //Saves the auth token in localstorage to be used in listing requests
        window.localStorage.setItem('token', res.data.payload);
        window.history.replaceState('/listings');
      })
      .catch(err => setLoginError(err))
}

//To be used with any user event that logs the user out, logout button, etc
export const logoutAction = () => {
  window.localStorage.removeItem('token');
  window.history.replaceState('/login');
}