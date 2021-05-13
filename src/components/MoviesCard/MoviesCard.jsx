import crossPath from '../../images/cross.svg';

const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
}

const URL = 'https://api.nomoreparties.co';

const MoviesCard = ({ name, image, duration, isSaved, isChecked, handleCheck }) => {
    return (
        <div className="movies-card">
            <img src={ URL + image } alt="Обложка" className="movies-card__image"/>
            <div className="movies-card__card-info card-info">
                <p className="card-info__title">{ name }</p>
                {
                    isSaved
                    ? <img src={ crossPath } alt="удалить" className="card-info__remove"/>
                    : (
                        <label className={isChecked ? "card-info__label _checked" : "card-info__label"}>
                            <input type="checkbox" onClick={handleCheck} className="card-info__button"/>
                            <span className="card-info__checkbox"></span>
                        </label>
                    )
                }
            </div>
            <p className="card-info__time">{ convertDuration(duration) }</p>
        </div>
    )
};

export default MoviesCard;
