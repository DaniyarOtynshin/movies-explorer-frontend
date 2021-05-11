import crossPath from '../../images/cross.svg';

const handleDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
}

const MoviesCard = ({ name, image, duration, isSaved }) => {
    return (
        <div className="movies-card">
            <img src={ image } alt="Обложка" className="movies-card__image"/>
            <div className="movies-card__card-info card-info">
                <p className="card-info__title">{ name }</p>
                {
                    isSaved
                    ? <img src={ crossPath } alt="удалить" className="card-info__remove"/>
                    : (
                        <label className="card-info__label">
                            <input type="checkbox" className="card-info__button"/>
                            <span className="card-info__checkbox"></span>
                        </label>
                    )
                }

            </div>
            <p className="card-info__time">{ handleDuration(duration) }</p>
        </div>
    )
};

export default MoviesCard;
