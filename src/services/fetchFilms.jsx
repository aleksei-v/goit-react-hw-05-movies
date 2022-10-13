import axios from 'axios';

const KEY = "d3e47a6c341374c5e6e0b7f3ed37e26e";

export async function fetchTrendFilms() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day';

  try {
    const { data } = await axios.get(`${url}?api_key=${KEY}`);
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
}

export async function fetchSearchFilms(text) {
  const url = 'https://api.themoviedb.org/3/search/movie';

  try {
    const { data } = await axios.get(
      `${url}?api_key=${KEY}&query=${text}`
    );
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not search films' + error);
  }
};

export async function fetchFilmById(id) {
  const url = 'https://api.themoviedb.org/3/movie/';

  try {
    const { data } = await axios.get(`${url}${id}?api_key=${KEY}`);
    return data;
  } catch (error) {
    console.error('Something wrong! Can not search films by ID' + error);
  }
};

export async function fetchCreditsFilmById(id) {
  const url = 'https://api.themoviedb.org/3/movie/';

  try {
    const { data } = await axios.get(`${url}${id}/credits?api_key=${KEY}`);
    return data.cast
  } catch (error) {
    console.error('Something wrong! Can not search films by ID' + error);
  }
};

export async function fetchReviewsFilmById(id) {
  const url = 'https://api.themoviedb.org/3/movie/';

  try {
    const { data } = await axios.get(`${url}${id}/reviews?api_key=${KEY}`);
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not search films by ID' + error);
  }
};