import PropTypes from 'prop-types';
import { useState } from "react";
import { SearchForm, SearchFormInput, SearchFormButton } from "./SearchBox.styled";

const SearchBox = ({ onSubmit }) => {

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
            <SearchForm onSubmit={onSubmitSearch}>
                <SearchFormInput type="text"
                    onChange={handleSearch}
                />
                <SearchFormButton type="submit">Search</SearchFormButton>
            </SearchForm>
        </div>
    )
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchBox;