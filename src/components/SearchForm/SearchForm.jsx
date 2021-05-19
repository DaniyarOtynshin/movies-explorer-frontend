import findPath from '../../images/search.svg';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useFormWithValidation } from "../../hooks/useForm";

const SearchForm = ({onSubmit, isFiltered, handleFilter}) => {

    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e, values);
        resetFrom();
    }

    return (
        <form noValidate className="search-form page__section" onSubmit={handleSubmit}>
            <input
                value={values.search || ""}
                required
                minLength="2"
                name="search"
                type="text"
                placeholder="фильм"
                onChange={handleChange}
                className="search-form__input"
            />
            <img src={ findPath } alt="Поиск" className="search-form__find"/>
            <button type="submit" disabled={!isValid} className={`search-form__button ${!isValid && "search-form__button_disabled"}`}>
                Найти
            </button>
            <span className="form-input__error form-input__error_active">
                {errors.search || ""}
            </span>
            <FilterCheckBox isFiltered={isFiltered} handleFilter={handleFilter} />
        </form>
    )
};

export default SearchForm;