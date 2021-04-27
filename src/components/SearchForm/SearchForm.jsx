import findPath from '../../images/search.svg';

const SearchForm = (props) => {
    return (
        <form className="search-form page__section">
            <input type="text" placeholder="фильм" className="search-form__input"/>
            <img src={ findPath } alt="Поиск" className="search-form__find"/>
            <button className="search-form__button">Найти</button>
        </form>
    )
};

export default SearchForm;