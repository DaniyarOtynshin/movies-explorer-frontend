import React from 'react';

const AboutProject = (props) => {
    return (
        <div className="about-project page__section">
            <h2 className="about-project__title">
                О проекте
            </h2>
            <div className="about-project__info">
                <div className="about-project__description">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__description">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
        </div>
    )
};

export default AboutProject;