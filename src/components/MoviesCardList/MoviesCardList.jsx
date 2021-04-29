import MoviesCard from "../MoviesCard/MoviesCard"

const MoviesCardList = (props) => {
    return (
        <div className="movies-card-list page__section">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <div className="movies-card-list__more more">
                <button className="more__button">ещё</button>
            </div>
        </div>
    )
};

export default MoviesCardList;