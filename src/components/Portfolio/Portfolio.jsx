import React from 'react';

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__links links">
                <a href="https://github.com/" className="links__link">Статичный сайт</a>
                <a href="https://github.com/" className="links__link">Адаптивный сайт</a>
                <a href="https://github.com/" className="links__link">Одностраничное приложение</a>
            </div>
        </div>
    )
};

export default Portfolio;