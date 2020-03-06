import {axiosWithAuth} from '../utils/axiosWithAuth';


// Credentials is an object with username and password properties
export const registerAction = (credentials, setSignupError, history) => {
    axiosWithAuth()
      .post('/auth/register', credentials)
      .then(res => {
        //Saves the auth token in localstorage to be used in listing requests
        window.localStorage.setItem('token', res.data.token);
        //Replaces current history item with listings to encourage the user not to navigate back to login page until they click a logout button and clear their auth token
        history.push('/login')
      })
      .catch(err => {
        setSignupError(err)
        history.push('/login')
      })
}

//Same as above, takes an object with username and password
export const loginAction = (credentials, setLoginError, history) => {
    axiosWithAuth()
      .post('/auth/login', credentials)
      .then(res => {
        //Saves the auth token in localstorage to be used in listing requests
        console.log(res)
        window.localStorage.setItem('token', res.data.token);
        history.push('/listings')
      })
      .catch(err => setLoginError(err))
}

//To be used with any user event that logs the user out, logout button, etc
export const logoutAction = (history) => {
  window.localStorage.removeItem('token');
  history.push('/login')
}