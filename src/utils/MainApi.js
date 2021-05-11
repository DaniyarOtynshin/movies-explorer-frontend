class MainApi {
    constructor(url) {
        this._url = url;
    };

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
      };

    getAllMovies(token) {
        return fetch(`${this._url}movies`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          })
        .then((res) => this._checkResponse(res))
    };

    addMovie(movieBody) {
        return fetch(`${this._url}movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(...movieBody)
        })
        .then((res) => this._checkResponse(res))
    };

    deleteMovie(id) {
        return fetch(`${this._url}movies/${id}`, {
            method: 'DELETE'
        })
        .then((res) => this._checkResponse(res))
    };

    getCurrentProfile(token) {
        return fetch(`${this._url}users/me`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
        .then(res => this._checkResponse(res))
        .then(data => data)
      } 

    updateCurrentProfile({ email, name }) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email,
              name,
            })
        })
        .then((res) => this._checkResponse(res))
    };
}

const mainApi = new MainApi('/http://api.odt.students.nomoredomains.club/');

export default mainApi;
