import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React from "react";

const Movies = (props) => {
    console.log(props.movies)
    return (
        <section className="movies">
            <SearchForm
                onSubmit={props.onMovieSearchSubmit}
                searchProps={props.searchProps}
                isFiltered={props.isFiltered}
                handleFilter={props.handleFilter}
            />
            {
                props.isLoading
                ? <Preloader />
                : <MoviesCardList
                    handleMovie={props.handleMovie}
                    isSaved={props.isSaved}
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    isFiltered={props.isFiltered}
                />
            }
        </section>
    );
};

export default Movies;
