const FilterCheckBox = (props) => {
    return (
        <label className={props.isFiltered ? "filter-check-box _checked" : "filter-check-box"}>
            <input type="checkbox" onClick={props.handleFilter} className="filter-check-box__button"/>
            <span className="filter-check-box__checkbox"></span>
            <span className="filter-check-box__text">Короткометражки</span>
        </label>
    )
};

export default FilterCheckBox;