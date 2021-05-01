import findPath from '../../images/search.svg';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

const SearchForm = (props) => {
    return (
        <form className="search-form page__section">
            <input type="text" placeholder="фильм" className="search-form__input"/>
            <img src={ findPath } alt="Поиск" className="search-form__find"/>
            <button onClick={props.onClick} className="search-form__button">Найти</button>
            <FilterCheckBox />
        </form>
    )
};

export default SearchForm;