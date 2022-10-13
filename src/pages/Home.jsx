import { Box } from "components/Box";
import { fetchTrendFilms } from "services/fetchFilms";
import { useState, useEffect } from 'react';

import { FilmList } from "components/FilmList";

const ShowTrendingFilms = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const createGalleryFilms = async () => {
            try {
                const filmList = await fetchTrendFilms();
                setMovies(filmList);
            } catch (error) {
                console.log(error)
            };
            
        };
        createGalleryFilms()
    }, []);


    return (
        <Box p={5}>
            <Box as="h2" textAlign="center">Trending today</Box>
            <FilmList movies={movies} />
        </Box>
    );
};

export default ShowTrendingFilms;