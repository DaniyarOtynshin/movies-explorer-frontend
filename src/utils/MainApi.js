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
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        .then((res) => this._checkResponse(res))
    };

    addMovie(movie, token) {
        const URL = 'https://api.nomoreparties.co/beatfilm-movies';
        return fetch(`${this._url}movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: URL + movie.image.url,
                trailer: movie.trailerLink,
                thumbnail: URL + movie.image.formats.thumbnail.url,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            })
        })
        .then((res) => this._checkResponse(res))
    }

    deleteMovie(id, token) {
        return fetch(`${this._url}movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
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

const mainApi = new MainApi('http://localhost:3001/');

export default mainApi;
