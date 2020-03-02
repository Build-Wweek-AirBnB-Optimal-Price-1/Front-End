import axios from 'axios';


export const axiosData = () => {

    return axios.create({
        headers: {
            authorization: ''
        },
        //This base url will change to our backend api
        baseURL: 'http://localhost:5000'
    })
}