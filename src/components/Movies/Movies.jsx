import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"

const Movies = (props) => {
    return (
        <>
            <SearchForm />
            <MoviesCardList />
        </>
    )
};

export default Movies;