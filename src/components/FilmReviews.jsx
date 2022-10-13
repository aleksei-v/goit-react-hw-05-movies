import { fetchReviewsFilmById } from "services/fetchFilms";
import { useFetchData } from "hooks/useFetchData";

const ShowFilmReviews = () => {

    const movieReviews = useFetchData(fetchReviewsFilmById);

    if (movieReviews === null) {
        return;
    };
    
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

export default ShowFilmReviews;