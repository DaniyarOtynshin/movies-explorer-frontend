import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";

const Movies = (props) => {

    const [isRequested, setIsRequested] = useState(false);

    useEffect(() => {
        setIsRequested(false);
    }, [props.isSaved])

    return (
        <>
            <Header isMain={props.isMain} loggedIn={props.loggedIn} onSignOut={props.onSignOut}/>
            <section className="movies">
                <SearchForm
                    onSubmit={props.onMovieSearchSubmit}
                    isFiltered={props.isFiltered}
                    handleFilter={props.handleFilter}
                    setIsRequested={setIsRequested}
                    checkIsFilteredLocalStorage={props.checkIsFilteredLocalStorage}
                />
                {
                    isRequested ? props.isLoading
                        ? <Preloader />
                        : props.isSaved
                            ? <SavedMoviesCardList
                            handleMovie={props.handleMovie}
                            isSaved={props.isSaved}
                            savedMovies={props.savedMovies}
                            showFilteredMovies={props.showFilteredMovies}
                            isFiltered={props.isFiltered}
                            checkSavedMoviesLocalStorage={props.checkSavedMoviesLocalStorage}
                            setSavedMoviesLocalStorage={props.setSavedMoviesLocalStorage}
                            checkIsFilteredLocalStorage={props.checkIsFilteredLocalStorage}
                            setIsFilteredLocalStorage={props.setIsFilteredLocalStorage}
                            />
                            : <MoviesCardList
                            handleMovie={props.handleMovie}
                            isSaved={props.isSaved}
                            movies={props.movies}
                            savedMovies={props.savedMovies}
                            showFilteredMovies={props.showFilteredMovies}
                            isFiltered={props.isFiltered}
                            checkSavedMoviesLocalStorage={props.checkSavedMoviesLocalStorage}
                            setSavedMoviesLocalStorage={props.setSavedMoviesLocalStorage}
                            checkMoviesLocalStorage={props.checkMoviesLocalStorage}
                            setMoviesLocalStorage={props.setMoviesLocalStorage}
                            checkIsFilteredLocalStorage={props.checkIsFilteredLocalStorage}
                            setIsFilteredLocalStorage={props.setIsFilteredLocalStorage}
                            />
                        : null
                }
            </section>
        </>
    );
};

export default Movies;
