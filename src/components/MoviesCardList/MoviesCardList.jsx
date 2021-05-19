import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    const [movies, setMovies] = useState([]);
    const [isMoreHidden, setIsMoreHidden] = useState(false);
    const [loadIndex, setLoadIndex] = useState(3);

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
        const showFilteredMovies = () => {
            let moviesToFilter = props.movies;
            moviesToFilter = props.isFiltered
            ? moviesToFilter.filter((movie) => movie.duration <= 40)
            : moviesToFilter
            setMovies(moviesToFilter);
            setLoadIndex(3);
        }

        showFilteredMovies();
    }, [props.isFiltered, props.movies])

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
                <button onClick={() => handleLoadMore(4)} className="more__button">ещё</button>
            </div>
        </div>
    )
};

export default MoviesCardList;