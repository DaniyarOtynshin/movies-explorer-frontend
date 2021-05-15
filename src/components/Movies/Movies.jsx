import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React from "react";

const Movies = (props) => {
    return (
        <section className="movies">
            <SearchForm onSubmit={props.onMovieSearchSubmit} searchProps={props.searchProps} />
            {
                props.isLoading
                ? <Preloader />
                : <MoviesCardList
                    handleMovie={props.handleMovie}
                    isSaved={props.isSaved}
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                />
            }
        </section>
    );
};

export default Movies;
