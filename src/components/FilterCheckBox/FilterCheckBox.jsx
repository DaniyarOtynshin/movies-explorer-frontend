const FilterCheckBox = (props) => {
    return (
        <label className="filter-check-box">
            <input type="checkbox" className="filter-check-box__button"/>
            <span className="filter-check-box__checkbox"></span>
            <span className="filter-check-box__text">Короткометражки</span>
        </label>
    )
};

export default FilterCheckBox;