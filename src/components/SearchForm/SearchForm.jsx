import findPath from '../../images/search.svg';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

const SearchForm = ({onSubmit, searchProps, isFiltered, handleFilter}) => {
    return (
        <form className="search-form page__section" onSubmit={onSubmit}>
            <input {...searchProps} type="text" placeholder="фильм" className="search-form__input"/>
            <img src={ findPath } alt="Поиск" className="search-form__find"/>
            <button className="search-form__button">Найти</button>
            <FilterCheckBox isFiltered={isFiltered} handleFilter={handleFilter} />
        </form>
    )
};

export default SearchForm;