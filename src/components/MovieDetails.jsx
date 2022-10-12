import { fetchFilmById } from "services/fetchFilms";
import {Link, NavLink, Outlet, useParams, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Box } from "./Box";

const NavItem = styled(NavLink)`
  display: block;
  width: 100px;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
   &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

`;

export const MovieDetails = () => {

    const { movieId } = useParams();
 
    const [movie, setMovie] = useState(null);
    
    const location = useLocation()

    useEffect(() => {
        const createFilmInfo = async () => {
            try {
                const film = await fetchFilmById(movieId);
                setMovie(film);
            } catch (error) {
                console.log(error)
            };
        };
        createFilmInfo()
    }, [movieId]);

    if (!movie) {
        return; 
    }
        const backLinkRef = location.state?.from ?? "/home"
    const { poster_path, title, vote_average, overview, genres } = movie;
    return (
        <>
            <Link to={backLinkRef}>Go back </Link>
            <Box display="flex" alignItems="center" justifyContent="space-around" gridGap={6}>
                <Box as='img' width="200px"
                    src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
                        alt={title} />
              
                <div>
                <h2>{title}</h2>
                <p>User score: <span>{vote_average.toFixed(1)}</span></p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(({name}) => name).join(', ')}</p>
                </div>
            </Box>
            <Box>
                <NavItem to="cast">Cast</NavItem>
                <NavItem to="review">Review</NavItem>
            </Box>
            <Outlet />
        </>
    )
}