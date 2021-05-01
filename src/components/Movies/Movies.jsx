import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import { useState } from "react";


const Movies = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
    }

    return (
        <section className="movies">
            <SearchForm onClick={onClick}/>
            {
                isLoading
                ? <Preloader />
                : <MoviesCardList isSaved={props.isSaved}/>
            }
        </section>
    )
};

export default Movies;