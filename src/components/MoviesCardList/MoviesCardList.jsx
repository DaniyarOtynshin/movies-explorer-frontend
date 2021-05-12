import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    return (
        <div className="movies-card-list page__section">
            {
                props.movies.map((movieData) => {
                    return (
                        <MoviesCard
                            handlecheck={props.handlecheck}
                            key={movieData.id}
                            isSaved={props.isSaved}
                            isChecked={props.isChecked}
                            name={movieData.nameRU}
                            image={movieData.image?.url}
                            duration={movieData.duration}
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