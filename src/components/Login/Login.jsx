import { useFormWithValidation } from "../../hooks/useForm";
import logoPath from '../../images/logo.svg';

const Login = (props) => {

    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();

    function handleLoginSubmit(e) {
        e.preventDefault();
        props.onLogin(values);
        resetFrom();
    }


    return (
        <section className="page__content login">
            <a href="/"><img src={ logoPath } alt="Логотип" className="login__logo logo"/></a>
            <h2 className="login__welcome welcome">Рады видеть!</h2>
            <form className="login__form form" onSubmit={handleLoginSubmit}>
                <label className="form__label">
                    <span className="login__input-title input-title">E-mail</span>
                    <input
                        type="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        name="email"
                        required
                        minLength='2'
                        className="login__input form-input"
                    />
                    <span className="form-input__error form-input__error_active">
                        {errors.email || ""}
                    </span>
                </label>
                <label className="form__label">
                    <span className="login__input-title input-title">Пароль</span>
                    <input
                        type="password"
                        value={values.password || ""}
                        onChange={handleChange}
                        name="password"
                        required
                        minLength='2'
                        className="login__input form-input"
                    />
                    <span className="form-input__error form-input__error_active">
                        {errors.password || ""}
                    </span>
                </label>
                <button disabled={!isValid} className={`login__button button ${!isValid && "button_disabled"}`}>
                    Войти
                </button>
            </form>
            <p className="login__question">Еще не зарегистрированы? <a className="login__login-link" href="/signup">Регистрация</a></p>
        </section>
    )
};

export default Login;