import React, { useState } from 'react';

import logoPath from '../../images/logo.svg';

const Header = (props) => {
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
                            props.isMain
                            ? <>
                                <li><a href="/signup" className="menu__link">Регистрация</a></li>
                                <li><a href="/signin" className="menu__link"><button className="menu__button">Войти</button></a></li>
                            </>
                            : <>
                                {
                                    isActive
                                    ? <li className="menu__item"><a href="/" className="menu__link">Главная</a></li>
                                    : <></>
                                }
                                <li className="menu__item"><a href="/movies" className="menu__link menu__link_active">Фильмы</a></li>
                                <li className="menu__item"><a href="/saved-movies" className="menu__link">Сохранённые фильмы</a></li>
                                <div className="menu__profile-account">
                                    <a href="/profile" className="menu__link menu__profile-text">Аккаунт</a>
                                    <a href="/profile" className="menu__link menu__link_profile"><span className="menu__profile"/></a>
                                </div>
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