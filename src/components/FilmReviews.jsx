import { fetchReviewsFilmById } from "services/fetchFilms"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const ShowFilmReviews = () => {

    const { movieId } = useParams();

    const [movieReviews, setMovieReviews] = useState(null);

    useEffect(() => {
        const createFilmInfo = async () => {
            try {
                const film = await fetchReviewsFilmById(movieId);
                setMovieReviews(film);
            } catch (error) {
                console.log(error)
            };
        };
        createFilmInfo()
    }, [movieId]);


    if (movieReviews === null) {
        return;
    };
    console.log(movieReviews)
    return (
        <>
            {movieReviews.length !== 0
                ? <ul>
                    {movieReviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <h3>Author: {author}</h3>
                                <p>{content}</p>
                            </li>
                        )
                    })}
                </ul>
                : <p>Sorry, there are no reviews yet</p>
            }
        </>
    );
};

