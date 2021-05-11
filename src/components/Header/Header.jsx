import React, { useState } from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import logoPath from '../../images/logo.svg';

const Header = (props) => {

    const currentUser = React.useContext(CurrentUserContext);

    const [isActive, setIsActive] = useState(false);

    const handleMenuButton = () => {
        isActive
        ? handleCloseMenu()
        : handleOpenMenu()
    }

    const handleCloseMenu = () => {
        setIsActive(false);
    }

    const handleOpenMenu = () => {
        setIsActive(true);
    }

    return (
        <header className={ `page__content ${props.isMain ? "page__content_green" : "page__content_black"}` }>
            <div className="header page__section">
                <a href="/"><img src={ logoPath } alt="logo" className="header__logo logo"/></a>
                <div className="header__menu menu">
                    <div onClick={handleMenuButton} class={ `menu__icon${isActive ? " menu__icon_active" : ""}` }>
                        <span></span>
                    </div>
                    <div className={ `menu__body${isActive ? " menu__body_active" : ""}` }>
                        <ul className="menu__list">
                        {
                            props.isLoggedIn
                            ? <>
                                {
                                    isActive
                                    ? <li className="menu__item"><a href="/" className="menu__link">Главная</a></li>
                                    : <></>
                                }
                                <li className="menu__item"><a href="/movies" className="menu__link menu__link_active">Фильмы</a></li>
                                <li className="menu__item"><a href="/saved-movies" className="menu__link">Сохранённые фильмы</a></li>
                                <a href="/profile" className="menu__profile-account">
                                    <p className="menu__link menu__profile-text">Аккаунт</p>
                                    <span className="menu__profile"/>
                                </a>
                            </>
                            : <>
                                <li className="menu__item"><a href="/signup" className="menu__link">Регистрация</a></li>
                                <li className="menu__item"><a href="/signin" className="menu__link menu__link_button">Войти</a></li>
                            </>
                        }
                        </ul>
                    </div>
                    <div className="menu__body_background" />
                </div>
            </div>
        </header>
    )
};

export default Header;