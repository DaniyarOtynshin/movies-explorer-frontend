const Profile = (props) => {
    return (
        <div className="profile">
            <h2 className="profile__welcome">Привет, Виталий!</h2>
            <form className="profile__form">
                <input type="text" value="Виталий" className="profile__input"/>
                <span className="profile__input-title">Имя</span>
                <input type="text" value="pochta@yandex.ru" className="profile__input profile__input_bottom"/>
                <span className="profile__input-title profile__input-title_bottom">E-mail</span>
                <button className="profile__button">Редактировать</button>
            </form>
            <button className="profile__exit-button">Выйти из аккаунта</button>
        </div>
    )
};

export default Profile;