import { fetchCreditsFilmById } from "services/fetchFilms";
import { Box } from "./Box";
import { useFetchData } from "hooks/useFetchData";
import { Image as Img } from 'simple-react-image';
const ShowFilmCast = () => {

    const movieCredits = useFetchData(fetchCreditsFilmById);


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
                    <Img width="200px"
                        errorImage='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg'
                        src={`https://www.themoviedb.org/t/p/w500${profile_path}`}
                        alt={name}
                    />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
                   
            )}
        </Box>
    );
};

export default ShowFilmCast;