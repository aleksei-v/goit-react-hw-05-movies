import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchData = (fetchData) => {

    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const createFilmInfo = async () => {
            try {
                const film = await fetchData(movieId);
                setMovie(film);
            } catch (error) {
                console.log(error)
            };
        };
        createFilmInfo()
    }, [movieId, fetchData]);

    return movie;
};