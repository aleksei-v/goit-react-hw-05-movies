import { Box } from "components/Box";
import { fetchTrendFilms } from "services/fetchFilms";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const ShowTrendingFilms = () => {
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
            <h2>Trending today</h2>
            <ul>
                {movies.map(({ id, title }) =>
                    <li key={id}>
                         <Link to={`${id}`}>{title}</Link>
                    </li>)}
                
            </ul>
        </Box>
    );
};