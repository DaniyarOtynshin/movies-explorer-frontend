import { useInput } from '../../hooks/useInput';
import logoPath from '../../images/logo.svg';

const Register = (props) => {
    const [nameProps, resetName] = useInput('');
    const [emailProps, resetEmail] = useInput('');
    const [passwordProps, resetPassword] = useInput('');


    function handleRegisterSubmit(e) {
        e.preventDefault();
        if (!nameProps.value || !emailProps.value || !passwordProps.value) {
            return;
        }
        props.onRegister(emailProps.value, passwordProps.value, nameProps.value);
        resetName()
        resetEmail()
        resetPassword()
    }

    return (
        <section className="register">
            <a href="/"><img src={ logoPath } alt="Логотип" className="register__logo logo"/></a>
            <h2 className="register__welcome welcome">Добро пожаловать!</h2>
            <form className="register__form form" onClick={handleRegisterSubmit}>
                <span className="register__input-title input-title">Имя</span>
                <input type="text" { ...nameProps } className="register__input form-input"/>
                <span className="register__input-title input-title">E-mail</span>
                <input type="text" { ...emailProps } className="register__input form-input"/>
                <span className="register__input-title input-title">Пароль</span>
                <input type="password" { ...passwordProps } minLength="2" className="register__input form-input"/>
                <span className="form-input__error">Что-то пошло не так...</span>
                <button className="register__button button">Зарегистрироваться</button>
            </form>
            <p className="register__question">Уже зарегистрированы? <a className="register__login-link" href="/signin">Войти</a></p>
        </section>
    )
};

export default Register;