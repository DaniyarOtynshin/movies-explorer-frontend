import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React, { useState } from "react";

import CurrentUserContext from '../../contexts/CurrentUserContext';

const Movies = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const currentUser = React.useContext(CurrentUserContext);

    const onClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
    }

    return (
        <section className="movies">
            <SearchForm onClick={onClick}/>
            {
                isLoading
                ? <Preloader />
                : <MoviesCardList isSaved={props.isSaved}/>
            }
        </section>
    )
};

export default Movies;