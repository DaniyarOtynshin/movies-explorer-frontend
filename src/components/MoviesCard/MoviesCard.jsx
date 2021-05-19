import crossPath from '../../images/cross.svg';

const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
}

const URL = 'https://api.nomoreparties.co';
const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

const MoviesCard = ({ name, image, duration, isChecked, isSaved, handleMovie, movieData, savedMovie, trailerLink }) => {

    const handleClick = () => {
        isChecked ? handleMovie(isChecked, savedMovie) : handleMovie(isChecked, movieData);
    }

    const handleImage = () => {
        return isSaved
        ? image
        : image ? URL + image : NO_IMAGE;
    };

    return (
        <a rel="noreferrer" target="_blank" href={trailerLink} className="movies-card">
            <img src={ handleImage() } alt="Обложка" className="movies-card__image"/>
            <div className="movies-card__card-info card-info">
                <p className="card-info__title">{ name }</p>
                {
                    isSaved
                    ? <img src={ crossPath } onClick={() => handleMovie(true, movieData)} alt="удалить" className="card-info__remove"/>
                    : (
                        <label className={isChecked ? "card-info__label _checked" : "card-info__label"}>
                            <input type="checkbox" onClick={handleClick} className="card-info__button"/>
                            <span className="card-info__checkbox"></span>
                        </label>
                    )
                }
            </div>
            <p className="card-info__time">{ convertDuration(duration) }</p>
        </a>
    )
};

export default MoviesCard;
