import logoPath from '../../images/logo.svg';

const Login = (props) => {
    return (
        <div className="page__content login">
            <a href="/"><img src={ logoPath } alt="Логотип" className="login__logo logo"/></a>
            <h2 className="login__welcome welcome">Рады видеть!</h2>
            <form className="login__form form">
                <span className="login__input-title input-title">E-mail</span>
                <input type="text" className="login__input form-input"/>
                <span className="login__input-title input-title">Пароль</span>
                <input type="password" className="login__input form-input"/>
                <button className="login__button button">Войти</button>
            </form>
            <p className="login__question">Еще не зарегистрированы? <a className="login__login-link" href="/signup">Регистрация</a></p>
        </div>
    )
};

export default Login;