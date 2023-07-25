import axios from 'axios';

const API_KEY =
  'live_aZ66IfkATLUF42U83gOdIy65TZx1LZGVptF2Ayq1Qc6N5ChK7nPDqY191LhfguvS';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}
