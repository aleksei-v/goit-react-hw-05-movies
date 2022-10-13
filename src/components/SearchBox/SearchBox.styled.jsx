import styled from "styled-components";

export const SearchForm = styled.form`
margin-left: auto;
margin-right: auto;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 30px;
    font: inherit;
    font-size: 20px;
    border: 1px solid black;
    margin-right: 10px;
    padding-left: 4px;
    padding-right: 4px;
`

export const SearchFormButton = styled.button`
    display: inline-block;
    width: 150px;
    height: 50px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      
    cursor: pointer;
    border: none;
        border-radius: 8px;
    :hover{
     background-color: ${p => p.theme.colors.primary};
    }
`