import { useFormWithValidation } from "../../hooks/useForm";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";
import { useContext, useEffect, useState } from "react";

const Profile = (props) => {

    const [isEdit, setIsEdit] = useState(false);
    const {values, handleChange, resetFrom, errors} = useFormWithValidation();
    const currentUser = useContext(CurrentUserContext);


    const handleEditSubmit = (e) => {
        e.preventDefault();
        props.onEditProfile(values);
        setIsEdit(false);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        props.handleSuccessMessage(false);
        setIsEdit(true);
    }

    useEffect(() => {
        if (currentUser) {
          resetFrom(currentUser, {}, true);
        }
      }, [currentUser, resetFrom]);

    return (
        <>
            <Header isMain={props.isMain} loggedIn={props.loggedIn} onSignOut={props.onSignOut}/>
            <section className="profile">
                <h2 className="profile__welcome welcome">Привет, {currentUser.name}</h2>
                <form onSubmit={handleEditSubmit} noValidate className="profile__form">
                <label className="form__label">
                        <input
                            type="text"
                            value={isEdit ? values.name || "" : currentUser.name}
                            onChange={isEdit ? handleChange : undefined}
                            name="name"
                            required
                            minLength='2'
                            className="profile__input"
                        />
                        <span className="profile__input-title">Имя</span>
                        <span className="form-input__error form-input__error_active">
                            {errors.name || ""}
                        </span>
                    </label>
                    <label className="form__label">
                        <input
                            type="email"
                            value={isEdit ? values.email || "" : currentUser.email}
                            onChange={isEdit ? handleChange : undefined}
                            name="email"
                            required
                            minLength='2'
                            className="profile__input"
                        />
                        <span className="profile__input-title">E-mail</span>
                        <span className="form-input__error form-input__error_active">
                            {errors.email || ""}
                        </span>
                    </label>
                    <button onClick={isEdit ? handleEditSubmit : handleEdit} className="profile__button">
                        {isEdit ? 'Сохранить' : 'Редактировать'}
                        <span className={props.showMessage ? 'profile__message' : 'profile__message profile__message_hidden'}>Сохранено</span>
                    </button>
                </form>
                <button onClick={props.onSignOut} className="profile__exit-button">Выйти из аккаунта</button>
            </section>
        </>
    )
};

export default Profile;
