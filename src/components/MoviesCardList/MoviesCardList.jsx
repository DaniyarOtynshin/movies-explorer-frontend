import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    const [localMovies, setLocalMovies] = useState([]);
    const [isMoreHidden, setIsMoreHidden] = useState(false);
    const [loadIndex, setLoadIndex] = useState(11);
    const [loadMovies, setLoadMovies] = useState(4);

    const {
        savedMovies,
        movies,
        handleMovie,
        isFiltered,
        setMoviesLocalStorage,
        setSavedMoviesLocalStorage,
        isSaved,
    } = props

    const handleIsChecked = (id) => {
        return savedMovies.some((savedMovie) => savedMovie.movieId === id);
    }

    const findSavedMovieId = (id) => {
        return savedMovies.find((savedMovie) => savedMovie.movieId === id);
    }

    const handleImage = (movieData) => {
        return typeof movieData.image === 'string' ? movieData.image : movieData.image?.url;
    }

    const handleLoadMore = (moviesCount) => {
        setLoadIndex((prevLoadIndex) => prevLoadIndex + moviesCount);
    }

    useEffect(() => {
        const numberOfMovieCards = () => {
            const width = window.innerWidth;
            if (width < 1200) {
                setLoadMovies(2)
                setLoadIndex(7)
            }
            if (width < 748) {
                setLoadMovies(1)
                setLoadIndex(4)
            }
            if (width >= 1200) {
                setLoadMovies(4)
                setLoadIndex(11)
            }
        }

        window.addEventListener('resize', (numberOfMovieCards));

        numberOfMovieCards();
    }, [])

    useEffect(() => {
        const handleSetMovies = (moviesToFilter, savedMovies) => {
            setMoviesLocalStorage(moviesToFilter);
            setSavedMoviesLocalStorage(savedMovies);
        }

        const showFilteredMovies = () => {
            let moviesToFilter = movies;
            moviesToFilter = isFiltered
            ? moviesToFilter.filter((movie) => movie.duration <= 40)
            : moviesToFilter
            setLocalMovies(moviesToFilter);
            moviesToFilter.length !== 0 && handleSetMovies(moviesToFilter, savedMovies);
        }

        showFilteredMovies();
    }, [isFiltered, movies, loadMovies, savedMovies, setMoviesLocalStorage, setSavedMoviesLocalStorage])

    useEffect(() => {
        const showLoadMoreButton = () => {
            localMovies.length <= loadIndex + 1 ? setIsMoreHidden(true) : setIsMoreHidden(false);
        }

        showLoadMoreButton()
    }, [localMovies.length, loadIndex])

    return (
        <div className="movies-card-list page__section">
            {
                localMovies.length === 0
                ? <p className="movies-card-list__not-found">???????????? ???? ?????????????? :(</p>
                : localMovies.map((movieData, index) => {
                    return index <= loadIndex && (
                        <MoviesCard
                            key={movieData.id}
                            movieData={movieData}
                            trailerLink={movieData.trailerLink}
                            handleMovie={handleMovie}
                            isSaved={isSaved}
                            name={movieData.nameRU}
                            image={handleImage(movieData)}
                            duration={movieData.duration}
                            savedMovie={findSavedMovieId(movieData.id || movieData.movieId)}
                            isChecked={handleIsChecked(movieData.id)}
                        />
                    )
                })
            }
            <div className={isMoreHidden ? "movies-card-list__more _hidden" : "movies-card-list__more"}>
                <button onClick={() => handleLoadMore(loadMovies)} className="more__button">??????</button>
            </div>
        </div>
    )
};

export default MoviesCardList;