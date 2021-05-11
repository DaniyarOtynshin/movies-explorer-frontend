import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React, { useEffect, useState } from "react";
import moviesApi from '../../utils/MoviesApi';

const Movies = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
    }

    useEffect(() => {
        moviesApi.getMovies()
            .then(movies => {
                setMovies(movies);
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false))
    })

    return (
        <section className="movies">
            <SearchForm onClick={onClick}/>
            {
                isLoading
                ? <Preloader />
                : <MoviesCardList isSaved={props.isSaved} movies={movies}/>
            }
        </section>
    )
};

export default Movies;