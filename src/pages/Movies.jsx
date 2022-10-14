import SearchBox from "components/SearchBox"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchSearchFilms } from "services/fetchFilms";
import { FilmList } from "components/FilmList";


const Movies = () => {
    const [movies, setMovies] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('query') ?? "";
  
    
    useEffect(() => {
        if (searchParam === '') {
            return
        };
        const createFilmInfo = async () => {
            try {
                const film = await fetchSearchFilms(searchParam);
                setMovies(film);
            } catch (error) {
                console.log(error)
            };
        };
        createFilmInfo()
    }, [searchParam]);
    
    const onSubmit = (value) => {
        setSearchParams(
            value !== ''
                ? { query: value }
                : {}
        );
    };
   
    return (
        <>
            <SearchBox onSubmit={onSubmit} query={searchParam} />
            <FilmList movies={movies} />  
        </>
    );
};

export default Movies;