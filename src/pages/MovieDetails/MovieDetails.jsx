import { fetchFilmById } from "services/fetchFilms";
import { Outlet, useLocation} from "react-router-dom";
import { Suspense } from "react";
import { Box } from "../../components/Box";
import { BackLink, NavItem } from "./MovieDetails.styled";
import { useFetchData } from "hooks/useFetchData";

const MovieDetails = () => {

    const movie = useFetchData(fetchFilmById);
   
    const location = useLocation();

    if (!movie) {
        return;
    };

    const backLinkRef = location.state?.from ?? "/home";

    const { poster_path, title, vote_average, overview, genres } = movie;
    
    return (
        <Box p={5}>
            <BackLink to={backLinkRef}>Go back </BackLink>
            <Box display="flex" alignItems="center" justifyContent="space-around" gridGap={6} mt={5}>
                <Box as='img' width="200px" mb={5}
                    src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
                    alt={title} />
              
                <div>
                    <h2>{title}</h2>
                    <p>User score: <span>{vote_average.toFixed(1)}</span></p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.map(({ name }) => name).join(', ')}</p>
                </div>
            </Box>
            <Box>
                <NavItem to="cast" state={{ from: backLinkRef }}>Cast</NavItem>
                <NavItem to="review" state={{ from: backLinkRef }}>Review</NavItem>
            </Box>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Box>
    )
};

export default MovieDetails;