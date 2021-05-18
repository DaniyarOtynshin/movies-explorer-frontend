import React, { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const SavedMoviesCardList = (props) => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isMoreHidden, setIsMoreHidden] = useState(false);
    const [loadIndex, setLoadIndex] = useState(3);

    const handleImage = (movieData) => {
        return typeof movieData.image === 'string' ? movieData.image : movieData.image?.url;
    }

    const handleLoadMore = (moviesCount) => {
        setLoadIndex((prevLoadiIndex) => prevLoadiIndex + moviesCount);
    }

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
                savedMovies.map((movieData, index) => {
                    return index <= loadIndex && (
                        <MoviesCard
                            key={movieData.id}
                            movieData={movieData}
                            handleMovie={props.handleMovie}
                            isSaved={props.isSaved}
                            name={movieData.nameRU}
                            image={handleImage(movieData)}
                            duration={movieData.duration}
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

export default SavedMoviesCardList;