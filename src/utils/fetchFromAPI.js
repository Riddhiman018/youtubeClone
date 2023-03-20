import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '98c57ecf0fmsh53110399faabaf3p1180f5jsn4e7c4acb162f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url)=>{
    const response = await axios.get(`${BASE_URL}/${url}`,options)
    return response.data;
}