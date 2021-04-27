import React from 'react';

const Portfolio = (props) => {
    return (
        <div className="portfolio page__section">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__links links">
                <a href="#" className="links__link">Статичный сайт</a>
                <a href="#" className="links__link">Адаптивный сайт</a>
                <a href="#" className="links__link">Одностраничное приложение</a>
            </div>
        </div>
    )
};

export default Portfolio;