import React from 'react';

const Techs = (props) => {
    return (
        <section className="techs page__content page__content_grey">
            <div className="page__section">
                <h2 className="techs__title title">Технологии</h2>
                <h3 className="techs__subtitle">7 технологии</h3>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__items items">
                    <div className="items__item">HTML</div>
                    <div className="items__item">CSS</div>
                    <div className="items__item">JS</div>
                    <div className="items__item">React</div>
                    <div className="items__item">Git</div>
                    <div className="items__item">Express.js</div>
                    <div className="items__item">mongoDB</div>
                </div>
            </div>
        </section>
    )
};

export default Techs;
