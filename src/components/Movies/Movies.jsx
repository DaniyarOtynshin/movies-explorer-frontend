import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React, { useEffect, useState } from "react";
import moviesApi from '../../utils/MoviesApi';

import { useInput } from '../../hooks/useInput';

const Movies = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const [searchProps, resetSearch] = useInput('');

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        moviesApi.getMovies()
            .then(movies => {
                const filteredMovies = movies.filter((movie) => {
                    return movie.nameRU.includes(searchProps.value)
                })
                setMovies(filteredMovies);
            })
            .catch(err => console.error(err))
            .finally(() => {
                setIsLoading(false)
                resetSearch()
            })
    }

    return (
        <section className="movies">
            <SearchForm onSubmit={onSubmit} searchProps={searchProps} />
            {
                isLoading
                ? <Preloader />
                : <MoviesCardList isSaved={props.isSaved} movies={movies}/>
            }
        </section>
    )
};

export default Movies;