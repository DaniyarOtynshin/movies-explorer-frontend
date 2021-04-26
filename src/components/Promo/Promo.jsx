import React from 'react';

import logoPath from '../../images/practicum-logo.svg';

const Promo = (props) => {
    return (
        <div className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={ logoPath } alt="Логотип" className="promo__logo"/>
        </div>
    )
};

export default Promo;