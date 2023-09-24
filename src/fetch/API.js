import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '217acb9ede8302e92a95aea614c27d92';

export const fetchMovies = async (page) => {
  const params = {
    api_key: apiKey,
    page: page,
  };
  try {
    const response = await axios.get('/trending/movie/day?', { params });
    return response.data.results
    ;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const fetchDetails = async (id) => {
  const params = {
    api_key: apiKey,
   
  };
  try {
    const response = await axios.get(`/movie/${id}`, { params });
    return response.data
    
    
 ;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const fetchCast = async (id) => {
  const params = {
    api_key: apiKey,
   
  };
  try {
    const response = await axios.get(`/movie/${id}/credits`, { params });
    return response.data.cast
    
    
 ;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const getReviews = async (id) => {
  const params = {
    api_key: apiKey,
   
  };
  try {
    const response = await axios.get(`/movie/${id}/reviews`, { params });
    return response.data.results
      
 ;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const searchMovies = async (p) => {
  const params = {
    api_key: apiKey,
    query: p,
  };
  try {
    const response = await axios.get('/search/movie', { params });
    return response.data.results
    ;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};