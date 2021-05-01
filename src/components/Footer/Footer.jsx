const Footer = (props) => {
    return (
        <footer className="footer page__section">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__copyright">&copy; 2021</p>
                <div className="footer__links">
                    <a href="https://praktikum.yandex.ru/" target="blank" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/" target="blank" className="footer__link">Github</a>
                    <a href="https://www.facebook.com/" target="blank" className="footer__link">Facebook</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;