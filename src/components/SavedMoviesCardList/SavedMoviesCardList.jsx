import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const SavedMoviesCardList = (props) => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isMoreHidden, setIsMoreHidden] = useState(false);
    const [loadIndex, setLoadIndex] = useState(11);
    const [loadMovies, setLoadMovies] = useState(4);

    const handleImage = (movieData) => {
        return typeof movieData.image === 'string' ? movieData.image : movieData.image?.url;
    }

    const handleLoadMore = (moviesCount) => {
        setLoadIndex((prevLoadiIndex) => prevLoadiIndex + moviesCount);
    }

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

    useEffect(() => {
        window.addEventListener('resize', (numberOfMovieCards));
        numberOfMovieCards();
    }, [])

    useEffect(() => {
        props.checkSavedMoviesLocalStorage();
    }, [props])

    useEffect(() => {
        const showFilteredMovies = (moviesToFilter) => {
            moviesToFilter = props.isFiltered
            ? moviesToFilter.filter((movie) => movie.duration <= 40)
            : moviesToFilter
            setSavedMovies(moviesToFilter);
        }

        showFilteredMovies(props.savedMovies);
    }, [props.isFiltered, props.savedMovies, props.isSaved])

    useEffect(() => {
        const showLoadMoreButton = () => {
            savedMovies.length <= loadIndex + 1 ? setIsMoreHidden(true) : setIsMoreHidden(false);
        }

        showLoadMoreButton()
    }, [savedMovies.length, loadIndex])

    return (
        <div className="movies-card-list page__section">
            {
                savedMovies.length === 0
                ? <p className="movies-card-list__not-found">Ничего не найдено :(</p>
                : savedMovies.map((movieData, index) => {
                    return index <= loadIndex && (
                        <MoviesCard
                            key={movieData.id}
                            movieData={movieData}
                            handleMovie={props.handleMovie}
                            trailerLink={movieData.trailerLink}
                            isSaved={props.isSaved}
                            name={movieData.nameRU}
                            image={handleImage(movieData)}
                            duration={movieData.duration}
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

export default SavedMoviesCardList;