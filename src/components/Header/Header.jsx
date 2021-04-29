import React from 'react';

import logoPath from '../../images/logo.svg';

const isMain = false;

const Header = (props) => {
    return (
        <header className={ `page__content ${isMain ? "page__content_green" : "page__content_black"}` }>
            <div className="header page__section">
                <a href="#"><img src={ logoPath } alt="logo" className="header__logo logo"/></a>
                <div className="header__menu menu">
                    <div class="menu__icon">
                        <span></span>
                    </div>
                    <div class="menu__body">
                        <ul class="menu__list">
                        {
                            isMain
                            ? <>
                                <li><a href="#" className="menu__link">Регистрация</a></li>
                                <li><a href="#" className="menu__link"><button className="menu__button">Войти</button></a></li>
                            </>
                            : <>
                                <li><a href="#" className="menu__link menu__link_movies">Фильмы</a></li>
                                <li><a href="#" className="menu__link menu__link_saved-films">Сохранённые фильмы</a></li>
                                <div className="menu__profile-account">
                                    <a href="#" className="menu__link menu__profile-text">Аккаунт</a>
                                    <a href="#" className="menu__link menu__link_profile"><span className="menu__profile"/></a>
                                </div>
                            </>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;