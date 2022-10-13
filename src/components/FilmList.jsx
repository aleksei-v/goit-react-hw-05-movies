import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { Box } from "components/Box";
import { Link } from "react-router-dom";

export const FilmList = ({ movies}) => {
    const location = useLocation()
    return (
        <Box as="ul" ml="auto" mr="auto" width="500px">
            {movies && movies.map(({ id, title }) =>
                <Box as="li" mb={3} key={id} color="black">
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                </Box>)}
        </Box>
    )
};

FilmList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    )
};