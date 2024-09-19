import axios from 'axios';

const API_KEY = '0a2f8506-f178-4b19-a3f7-3c7298936e65'; // Ваш API ключ
const BASE_URL = 'https://api.harvardartmuseums.org';

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        ...params,
        apikey: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
