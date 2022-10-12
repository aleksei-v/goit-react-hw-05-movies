import { useState } from "react"

export const SearchBox = ({onSubmit}) => {

    const [film, setFilm] = useState('');

    const handleSearch = evt => {
        setFilm(evt.currentTarget.value)
    };

    const onSubmitSearch = evt => {
        evt.preventDefault();

        onSubmit(film)
    };
    
    return (
        <div>
            <form onSubmit={onSubmitSearch}>
            <input type="text"
                    onChange={handleSearch}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}