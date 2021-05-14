import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    return (
        <div className="movies-card-list page__section">
            {
                props.movies.map((movieData) => {
                    return (
                        <MoviesCard
                            movieData={movieData}
                            handleMovie={props.handleMovie}
                            key={movieData.id}
                            isSaved={props.isSaved}
                            name={movieData.nameRU}
                            image={movieData.image?.url}
                            duration={movieData.duration}
                            owner={movieData.owner}
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