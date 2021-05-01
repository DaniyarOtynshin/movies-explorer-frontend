import React from 'react';

const AboutProject = (props) => {
    return (
        <section className="about-project page__section page__section_body">
            <h2 className="about-project__title title">
                О проекте
            </h2>
            <div className="about-project__info info">
                <div className="info__description">
                    <h3 className="info__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="info__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="info__description">
                    <h3 className="info__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="info__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__time-line time-line">
                <div className="time-line__backend">1 неделя</div>
                <div className="time-line__frontend">4 недели</div>
            </div>
        </section>
    )
};

export default AboutProject;
