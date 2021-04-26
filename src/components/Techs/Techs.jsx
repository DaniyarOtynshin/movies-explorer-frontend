import React from 'react';

const Techs = (props) => {
    return (
        <section className="techs page__content page__content_grey">
            <div className="page__section">
                <h2 className="techs__title title">
                    Технологии
                </h2>
                <div className="techs__info">
                    <h2 className="techs__subtitle">7 технологии</h2>
                    <p className="techs__descritpion">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <div className="techs__items"></div>
                </div>
            </div>
        </section>
    )
};

export default Techs;
