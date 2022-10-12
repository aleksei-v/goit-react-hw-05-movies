// import { Box } from "./Box";
import { Route, Routes, Navigate } from 'react-router-dom'
import { Layout } from './Layout';
import { ShowTrendingFilms } from '../pages/Home';
import { MovieDetails } from './MovieDetails';
import { ShowFilmCast } from './FilmCast';
import { ShowFilmReviews } from './FilmReviews';
import { Movies } from 'pages/Movies';
export const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Navigate to="home" />} />
          
          <Route path="home" element={<ShowTrendingFilms />} />
          
          <Route path="movies" element={<Movies/>} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
              <Route path="cast" element={<ShowFilmCast/>} />
              <Route path='review' element={<ShowFilmReviews/>}/>    
          </Route>           

          <Route path="*" element={<Navigate to="home" />} />
          </Route>
      </Routes>
    
    </>
  );
};
