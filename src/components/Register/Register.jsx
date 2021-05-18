import logoPath from '../../images/logo.svg';
import { useFormWithValidation } from "../../hooks/useForm";

const Register = (props) => {

    const {values, handleChange, resetFrom, errors, isValid} = useFormWithValidation();

    function handleRegisterSubmit(e) {
        e.preventDefault();
        props.onRegister(values);
        resetFrom();
    }

    return (
        <section className="register">
            <a href="/"><img src={ logoPath } alt="Логотип" className="register__logo logo"/></a>
            <h2 className="register__welcome welcome">Добро пожаловать!</h2>
            <form className="register__form form" noValidate onSubmit={handleRegisterSubmit}>
                <label className="form__label">
                    <span className="register__input-title input-title">Имя</span>
                    <input
                        type="text"
                        value={values.name || ""}
                        onChange={handleChange}
                        name="name"
                        required
                        minLength='2'
                        className="register__input form-input"
                    />
                    <span className="form-input__error form-input__error_active">
                        {errors.name || ""}
                    </span>
                </label>
                <label className="form__label">
                    <span className="register__input-title input-title">E-mail</span>
                    <input
                        type="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        name="email"
                        required
                        className="register__input form-input"
                    />
                    <span className="form-input__error form-input__error_active">
                        {errors.email || ""}
                    </span>
                </label>
                <label className="form__label">
                    <span className="register__input-title input-title">Пароль</span>
                    <input
                        type="password"
                        required
                        value={values.password || ""}
                        onChange={handleChange}
                        name="password" minLength="2"
                        className="register__input form-input"
                    />
                    <span className="form-input__error form-input__error_active">
                        {errors.password || ""}
                    </span>
                </label>
                <button disabled={!isValid} className={`register__button button ${!isValid && "button_disabled"}`}>
                    Зарегистрироваться
                </button>
            </form>
            <p className="register__question">
                Уже зарегистрированы? <a className="register__login-link" href="/signin">Войти</a>
            </p>
        </section>
    )
};

export default Register;