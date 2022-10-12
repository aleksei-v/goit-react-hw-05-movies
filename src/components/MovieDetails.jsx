import { fetchFilmById } from "services/fetchFilms";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "./Box";


export const MovieDetails = () => {

    const { movieId } = useParams();
 
    const [ movie, setMovie ] = useState({});

    useEffect(() => {
        const createFilmInfo = async () => {
            try {
                const film = await fetchFilmById(movieId);
                setMovie(film);
                console.log(film)
            } catch (error) {
                console.log(error)
            };
            
        };
        createFilmInfo()
    }, [movieId]);

    if (!movie) {
        return
    };
    const { poster_path, title, id, genre_ids, release_date, vote_average } = movie
    
    return (
        <>
            <Box as='img' width="200px"
                src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
                alt={title} />
            
        </>
    )
}