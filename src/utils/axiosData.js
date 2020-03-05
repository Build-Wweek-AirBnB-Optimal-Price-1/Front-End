import axios from 'axios';


//Still waiting on data science api
export const axiosData = () => {
   return axios.create({
       baseURL: 'https://opt-cors.herokuapp.com/'
   })
}

export const formatQuery = (listing) => {

    let query = `predict?bedrooms=${listing.bedrooms}&bathrooms=${listing.bathrooms}&accommodates=${listing.accomodates}&instant_bookable=${listing.instant_bookable}&maximum_nights=${listing.maximum_nights}&minimum_nights=${listing.minimum_nights}`
    

    query = query + listing.amenities.map(item => `&${item.value}=1`).join("");

    console.log(query)

    return query;
}