import React from 'react';

import logoPath from '../../images/logo.svg';

const Header = (props) => {
    return (
        <header className="header page__content page__header">
            <img src={ logoPath } alt="logo" className="header__logo logo"/>
            <div className="header__menu menu">
                <a href="#" className="menu__link">Регистрация</a>
                <a href="#" className="menu__link"><button className="menu__button">Войти</button></a>
            </div>
        </header>
    )
};

export default Header;