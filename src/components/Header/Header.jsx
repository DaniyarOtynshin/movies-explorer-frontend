import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/"><img src={ logoPath } alt="logo" className="header__logo logo"/></Link>
                <div className="header__menu menu">
                    <div onClick={handleMenuButton} className={ `menu__icon${isActive ? " menu__icon_active" : ""}` }>
                        <span></span>
                    </div>
                    <div className={ `menu__body${isActive ? " menu__body_active" : ""}` }>
                        <ul className="menu__list">
                        {
                            props.loggedIn
                            ? <>
                                {
                                    isActive
                                    ? <li className="menu__item"><Link to="/" className="menu__link">Главная</Link></li>
                                    : <></>
                                }
                                <li className="menu__item"><Link to="/movies" className="menu__link menu__link_active">Фильмы</Link></li>
                                <li className="menu__item"><Link to="/saved-movies" className="menu__link">Сохранённые фильмы</Link></li>
                                <Link to="/profile" className="menu__profile-account">
                                    <p className="menu__link menu__profile-text">Аккаунт</p>
                                    <span className="menu__profile"/>
                                </Link>
                            </>
                            : <>
                                <li className="menu__item"><Link to="/signup" className="menu__link">Регистрация</Link></li>
                                <li className="menu__item"><Link to="/signin" className="menu__link menu__link_button">Войти</Link></li>
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