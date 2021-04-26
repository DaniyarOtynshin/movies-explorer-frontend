import React from 'react';

import logoPath from '../../images/logo.svg';

const Header = (props) => {
    return (
        <header className="page__content page__content_green">
            <div className="header page__section">
                <img src={ logoPath } alt="logo" className="header__logo logo"/>
                <div className="header__menu menu">
                    <a href="#" className="menu__link">Регистрация</a>
                    <a href="#" className="menu__link"><button className="menu__button">Войти</button></a>
                </div>
            </div>
        </header>
    )
};

export default Header;