// import { Box } from "./Box";
import { Route, Routes, Navigate } from 'react-router-dom'
import { Layout } from './Layout';
import { ShowTrendingFilms } from '../pages/Home';
import { MovieDetails } from './MovieDetails';
export const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Navigate to="home" />} />
          
          <Route path="home" element={<ShowTrendingFilms />} />
          <Route path='home/:movieId' element={<MovieDetails/>} />   
          <Route path="movies" element={<div>Movies</div>} >
            
          </Route>
        
        

          {/* <Route path="*" element={<div>Error</div>} /> */}
          </Route>
      </Routes>
    
    </>
  );
};
