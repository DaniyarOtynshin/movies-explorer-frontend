import { useEffect } from "react";

const FilterCheckBox = ({ isFiltered, checkIsFilteredLocalStorage, handleFilter }) => {

    useEffect(() => {
        checkIsFilteredLocalStorage()
    }, [ checkIsFilteredLocalStorage, isFiltered ])

    return (
        <label className={isFiltered ? "filter-check-box _checked" : "filter-check-box"}>
            <input type="checkbox" onClick={handleFilter} className="filter-check-box__button"/>
            <span className="filter-check-box__checkbox"></span>
            <span className="filter-check-box__text">Короткометражки</span>
        </label>
    )
};

export default FilterCheckBox;