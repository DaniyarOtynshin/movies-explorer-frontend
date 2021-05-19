import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    const [movies, setMovies] = useState([]);
    const [isMoreHidden, setIsMoreHidden] = useState(false);
    const [loadIndex, setLoadIndex] = useState(3);
    const [loadMovies, setLoadMovies] = useState(4);

    const handleIsChecked = (id) => {
        return props.savedMovies.some((savedMovie) => savedMovie.movieId === id);
    }

    const findSavedMovieId = (id) => {
        return props.savedMovies.find((savedMovie) => savedMovie.movieId === id);
    }

    const handleImage = (movieData) => {
        return typeof movieData.image === 'string' ? movieData.image : movieData.image?.url;
    }

    const handleLoadMore = (moviesCount) => {
        setLoadIndex((prevLoadiIndex) => prevLoadiIndex + moviesCount);
    }

    useEffect(() => {
        const numberOfMovieCards = () => {
            const width = window.innerWidth;
            if (width < 1200) {
                setLoadMovies(2)
                setLoadIndex(1)
            }
            if (width <= 738) {
                setLoadMovies(1)
                setLoadIndex(0)
            }
            if (width >= 1200) {
                setLoadMovies(4)
                setLoadIndex(3)
            }
        }

        window.addEventListener('resize', (numberOfMovieCards));

        numberOfMovieCards();
    }, [])

    useEffect(() => {
        const showFilteredMovies = () => {
            let moviesToFilter = props.movies;
            moviesToFilter = props.isFiltered
            ? moviesToFilter.filter((movie) => movie.duration <= 40)
            : moviesToFilter
            setMovies(moviesToFilter);
        }

        showFilteredMovies();
    }, [props.isFiltered, props.movies, loadMovies])

    useEffect(() => {
        const showLoadMoreButton = () => {
            movies.length <= loadIndex + 1 ? setIsMoreHidden(true) : setIsMoreHidden(false);
        }

        showLoadMoreButton()
    }, [movies.length, loadIndex])

    return (
        <div className="movies-card-list page__section">
            {
                movies.length === 0
                ? <p className="movies-card-list__not-found">Ничего не найдено :(</p>
                : movies.map((movieData, index) => {
                    return index <= loadIndex && (
                        <MoviesCard
                            key={movieData.id}
                            movieData={movieData}
                            handleMovie={props.handleMovie}
                            isSaved={props.isSaved}
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
                <button onClick={() => handleLoadMore(loadMovies)} className="more__button">ещё</button>
            </div>
        </div>
    )
};

export default MoviesCardList;