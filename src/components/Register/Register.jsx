import logoPath from '../../images/logo.svg';

const Register = (props) => {
    return (
        <div className="register">
            <a href="#"><img src={ logoPath } alt="Логотип" className="register__logo logo"/></a>
            <h2 className="register__welcome welcome">Добро пожаловать!</h2>
            <form className="register__form form">
                <span className="register__input-title input-title">Имя</span>
                <input type="text" className="register__input form-input"/>
                <span className="register__input-title input-title">E-mail</span>
                <input type="text" className="register__input form-input"/>
                <span className="register__input-title input-title">Пароль</span>
                <input type="password" className="register__input form-input"/>
                <button className="register__button button">Зарегистрироваться</button>
            </form>
            <p className="register__question">Уже зарегистрированы? <a className="register__login-link" href="#">Войти</a></p>
        </div>
    )
};

export default Register;