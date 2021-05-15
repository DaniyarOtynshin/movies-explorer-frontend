import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    const handleIsChecked = (id) => {
        return props.savedMovies.some((savedMovie) => savedMovie.movieId === id);
    }

    const findSavedMovieId = (id) => {
        return props.savedMovies.filter((savedMovie) => savedMovie.movieId === id)[0];
    }

    return (
        <div className="movies-card-list page__section">
            {
                props.movies.map((movieData) => {
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
            <div className="movies-card-list__more more">
                <button className="more__button">ещё</button>
            </div>
        </div>
    )
};

export default MoviesCardList;