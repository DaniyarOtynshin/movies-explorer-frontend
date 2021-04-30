import React from 'react';

const Portfolio = (props) => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__links links">
                <a href="https://github.com/" target="blank" className="links__link">Статичный сайт</a>
                <a href="https://github.com/" target="blank" className="links__link">Адаптивный сайт</a>
                <a href="https://github.com/" target="blank" className="links__link">Одностраничное приложение</a>
            </div>
        </section>
    )
};

export default Portfolio;