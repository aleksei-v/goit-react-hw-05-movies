import PropTypes from 'prop-types';
import { useState } from "react";
import { SearchForm, SearchFormInput, SearchFormButton } from "./SearchBox.styled";

const SearchBox = ({ onSubmit, query }) => {

    const [film, setFilm] = useState('');

    const handleSearch = evt => {
        setFilm(evt.currentTarget.value);
    };

    const onSubmitSearch = evt => {
        evt.preventDefault();

        onSubmit(film);
    };
    
    return (
        <div>
            <SearchForm onSubmit={onSubmitSearch}>
                <SearchFormInput type="text"
                    onChange={handleSearch}
                    defaultValue={query}
                />
                <SearchFormButton type="submit">Search</SearchFormButton>
            </SearchForm>
        </div>
    )
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
};

export default SearchBox;