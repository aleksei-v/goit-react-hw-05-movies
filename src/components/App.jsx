
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './Layout';
import ShowTrendingFilms from '../pages/Home';
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const ShowFilmCast = lazy(() => import('./FilmCast'));
const ShowFilmReviews = lazy(() => import('./FilmReviews'));

export const App = () => 
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
