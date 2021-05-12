import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React, { useState } from "react";
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

import { useInput } from '../../hooks/useInput';

const Movies = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const [searchProps, resetSearch] = useInput('');

    const handleCheck = () => {
        isChecked
        ? onUncheck()
        : onCheck()
    }

    const onCheck = () => {
        setIsChecked(true);
    }

    const onUncheck = () => {
        setIsChecked(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        moviesApi.getMovies()
            .then(movies => {
                const filteredMovies = movies.filter((movie) => {
                    return movie.nameRU.toLowerCase().includes(searchProps.value.toLowerCase())
                })
                setMovies(filteredMovies);
            })
            .catch(err => console.error(err))
            .finally(() => {
                setIsLoading(false)
                resetSearch()
            });
    };

    const addMovie = (movie) => {
        mainApi.addMovie(movie)
            .then(() => {
                handleCheck()
            })
    }

    return (
        <section className="movies">
            <SearchForm onSubmit={onSubmit} searchProps={searchProps} />
            {
                isLoading
                ? <Preloader />
                : <MoviesCardList
                    addMovie={addMovie}
                    handleCheck={handleCheck}
                    isChecked={isChecked}
                    isSaved={props.isSaved}
                    movies={movies}
                />
            }
        </section>
    );
};

export default Movies;
