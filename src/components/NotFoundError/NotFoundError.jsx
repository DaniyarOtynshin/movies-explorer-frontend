const NotFoundError = () => {
    return (
        <div className="page__content not-found-error">
            <div className="not-found-error__error">
                <h1 className="not-found-error__code">404</h1>
                <p className="not-found-error__text">Страница не найдена</p>
            </div>
            <a href="/" className="not-found-error__link">назад</a>
        </div>
    )
};

export default NotFoundError;
