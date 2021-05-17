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
        return props.savedMovies.filter((savedMovie) => savedMovie.movieId === id)[0];
    }

    const handleLoadMore = () => {
        const newMoviesToShow = movies.splice(0, 4);
        setMoviesToShow([...moviesToShow, ...newMoviesToShow])
    }

    useEffect(() => {
        const showFilteredMovies = () => {
            let movies = props.movies;
            movies = props.isFiltered
            ? movies.filter((movie) => movie.duration <= 40)
            : movies
            setMovies(movies);
            moviesRef.current = movies;
        }

        const preloadFirstMovies = () => {
            const preloadedMoviesToShow = moviesRef.current.splice(0, 4);
            setMoviesToShow(preloadedMoviesToShow)
        }

        showFilteredMovies();
        preloadFirstMovies();
    }, [props.isFiltered, props.movies])

    useEffect(() => {
        const showLoadMoreButton = () => {
            movies.length >= 4 ? setIsMoreHidden(false) : setIsMoreHidden(true);
        }

        showLoadMoreButton()
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
                            image={movieData.image?.url}
                            duration={movieData.duration}
                            savedMovie={findSavedMovieId(movieData.id)}
                            isChecked={handleIsChecked(movieData.id)}
                        />
                    )
                })
            }
            <div className={isMoreHidden ? "movies-card-list__more _hidden" : "movies-card-list__more"}>
                <button onClick={handleLoadMore} className="more__button">ещё</button>
            </div>
        </div>
    )
};

export default MoviesCardList;