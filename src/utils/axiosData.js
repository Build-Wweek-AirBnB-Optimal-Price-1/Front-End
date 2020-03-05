import axios from 'axios';


//Still waiting on data science api
export const axiosData = () => {
   return axios.create({
       baseURL: 'https://optimal-api-2.herokuapp.com/'
   })
}

export const formatQuery = (listing) => {
    let query = "predict?";

    for (const property in listing) {
        switch(typof(listing[property])) {
            case 'number':
                {
                    if (query = "predict?") {
                        query = query + `${property}=${listing[property]}`
                    }
                    else {
                        query = query + `${property}=${listing[property]}`;
                    }
            }
            case 'array': 
                listing[property].forEach((item) => {
                    query = query + `&${item.value}=1`
                })
        }   
    }

    return query;
}