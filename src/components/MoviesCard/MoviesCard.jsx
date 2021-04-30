import imagePath from '../../images/movie1.jpg';

import crossPath from '../../images/cross.svg';

const MoviesCard = (props) => {
    return (
        <div className="movies-card">
            <img src={ imagePath } alt="Обложка" className="movies-card__image"/>
            <div className="movies-card__card-info card-info">
                <p className="card-info__title">33 слова о дизайне</p>
                {
                    props.isSaved
                    ? <img src={ crossPath } alt="удалить" className="card-info__remove"/>
                    : (
                        <label className="card-info__label">
                            <input type="checkbox" className="card-info__button"/>
                            <span className="card-info__checkbox"></span>
                        </label>
                    )
                }

            </div>
            <p className="card-info__time">11:34</p>
        </div>
    )
};

export default MoviesCard;
