import { fetchCreditsFilmById } from "services/fetchFilms"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "./Box";
export const ShowFilmCast = () => {

    const { movieId } = useParams();

    const [movieCredits, setMovieCredits] = useState(null);

    useEffect(() => {
        const createFilmInfo = async () => {
            try {
                const film = await fetchCreditsFilmById(movieId);
                setMovieCredits(film);
            } catch (error) {
                console.log(error)
            };
        };
        createFilmInfo()
    }, [movieId]);


    if (movieCredits === null) {
        return;
    };
    return (
        <Box as='ul' display="flex" flexWrap="wrap" gridGap={5}>
            {movieCredits.map(({
                id,
                profile_path,
                name,
                character
            }) =>
                <li key={id}>
                    <Box as='img' width="200px"
                        src={`https://www.themoviedb.org/t/p/w500${profile_path}`}
                        alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
                   
            )}
        </Box>
    );
};

