import { SearchBox } from "components/SearchBox"
import { useEffect, useState } from "react"
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { fetchSearchFilms } from "services/fetchFilms";

export const Movies = () => {
    const location = useLocation()
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
            <SearchBox value={searchParam} onSubmit={onSubmit} />
            {movies && <ul>
                {movies.map(({ id, title }) =>
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>)}
            </ul>}
        </>
    );
};