import React from 'react';

import photoPath from '../../images/photo.png';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = (props) => {
    return (
        <section className="about-me page__section page__section_body">
            <h2 className="about-me__title title">
                Студент
            </h2>
            <div className="about-me__my-info my-info">
                <div className="my-info__description">
                    <h3 className="my-info__name">Виталий</h3>
                    <h4 className="my-info__title">Фронтенд-разработчик, 30 лет</h4>
                    <p className="my-info__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className="my-info__contacts contacts">
                        <a href="https://www.facebook.com/" className="contacts__link">Facebook</a>
                        <a href="https://github.com/" className="contacts__link">Github</a>
                    </p>
                </div>
                <img src={ photoPath } alt="Моё фото" className="my-info__photo"/>
            </div>
            <Portfolio />
        </section>
    )
};

export default AboutMe;