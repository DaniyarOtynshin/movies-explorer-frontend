import React, { useEffect, useRef, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    const [movies, setMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [isMoreHidden, setIsMoreHidden] = useState(false);

    const moviesRef = useRef();

    const handleIsChecked = (id) => {
        return props.savedMovies.some((savedMovie) => savedMovie.movieId === id);
    }

    const findSavedMovieId = (id) => {
        return props.savedMovies.find((savedMovie) => savedMovie.movieId === id);
    }

    const handleLoadMore = (moviesCount) => {
        const newMoviesToShow = movies.splice(0, moviesCount);
        setMoviesToShow([...moviesToShow, ...newMoviesToShow])
    }

    const handleImage = (movieData) => {
        return typeof movieData.image === 'string' ? movieData.image : movieData.image?.url;
    }

    useEffect(() => {
        const savedMovies = props.isSaved ? props.savedMovies : props.movies;
        setMovies(savedMovies);
        moviesRef.current = savedMovies;
    }, [props.isSaved, props.savedMovies, props.movies])

    useEffect(() => {
        const showFilteredMovies = () => {
            let moviesToFilter = moviesRef.current;
            moviesToFilter = props.isFiltered
            ? moviesToFilter.filter((movie) => movie.duration <= 40)
            : moviesToFilter
            setMovies(moviesToFilter);
            moviesRef.current = moviesToFilter;
        }

        const preloadFirstMovies = (moviesCount) => {
            const preloadedMoviesToShow = moviesRef.current.splice(0, moviesCount);
            setMoviesToShow(preloadedMoviesToShow)
        }

        showFilteredMovies();
        preloadFirstMovies(4);
    }, [props.isFiltered, props.movies, props.isSaved])

    useEffect(() => {
        const showLoadMoreButton = (moviesCount) => {
            movies.length >= moviesCount ? setIsMoreHidden(false) : setIsMoreHidden(true);
        }

        showLoadMoreButton(4)
    }, [movies.length])

    return (
        <div className="movies-card-list page__section">
            {
                moviesToShow.map((movieData) => {
                    return (
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