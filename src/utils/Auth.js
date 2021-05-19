class Auth {
    constructor(url) {
        this._url = url;
    };

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
      };

    login(password, email) {
        return fetch(`${this._url}signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password, email})
        })
        .then((res) => this._checkResponse(res))
    };

    register(password, email, name) {
        return fetch(`${this._url}signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password, email, name})
        })
        .then((res) => this._checkResponse(res))
    };
};

const auth = new Auth('https://api.filmderdi-zerttewsi.nomoredomains.icu/');

export default auth;