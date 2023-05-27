import axios from 'axios';
const API_KEY = 'fc79b9c24904503e15894f783d71423b';
const API_TRENDING = 'https://api.themoviedb.org/3/trending/movie/day';
const API_MOVIE_ID = 'https://api.themoviedb.org/3/movie/';
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie';

export const getMovies = async page => {
  const { data } = await axios.get(API_TRENDING, {
    params: {
      api_key: API_KEY,
      page: page,
      total_pages: 12,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`${API_MOVIE_ID + String(id)}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getCredits = async id => {
  const { data } = await axios.get(`${API_MOVIE_ID + String(id)}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`${API_MOVIE_ID + String(id)}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getKeyWord = async (searchQuery, page) => {
  const { data } = await axios.get(API_SEARCH, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      page: page,
    },
  });

  return data;
};
