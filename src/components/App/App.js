import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundError from '../NotFoundError/NotFoundError';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

import auth from '../../utils/Auth';
import mainApi from '../../utils/MainApi';
import { useInput } from '../../hooks/useInput';
import moviesApi from '../../utils/MoviesApi';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const [searchProps, resetSearch] = useInput('');

    const history = useHistory();

    const onLogin = (password, email) => {
        auth.login(password, email)
            .then(data => {
                if (data.token) {
                    setLoggedIn(true);
                    localStorage.setItem('token', data.token);
                    history.push('/movies')
                }
            })
            .catch(err => console.error(err))
      }

    const onRegister = (email, password, name) => {
        auth.register(email, password, name)
            .then(data => {
                setCurrentUser({
                    email: data.email,
                    name: data.name
                })
                history.push('/signin');
            })
    };

    const onSignOut = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        history.push('/signin');
    };

    const handleMovie = (movie) => {
        const isAdded = movie.owner === currentUser._id;
        isAdded
        ? handleMovieAdd(movie)
        : handleMovieDelete(movie)
    }

    const handleMovieAdd = (movieBody) => {
        mainApi.addMovie(movieBody)
            .then((newMovie) => {
                const newMovies = movies.map(
                    (previousMovie) => previousMovie.movieId === newMovie.movieId ? newMovie : previousMovie
                );
                setMovies(newMovies);
            })
        .catch(err => console.error(err))
      }
    
    const handleMovieDelete = (movie) => {
        mainApi.deleteMovie(movie.movieId)
            .then((newMovie) => {
                const newMovies = movies.map(
                    (previousMovie) => previousMovie.movieId === newMovie.movieId ? newMovie : previousMovie
                );
                setMovies(newMovies);
            })
        .catch(err => console.error(err))
    }

    const onMovieSearchSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        moviesApi.getMovies()
            .then(movies => {
                const filteredMovies = movies.filter((movie) => {
                    return movie.nameRU.toLowerCase().includes(searchProps.value.toLowerCase())
                })
                setMovies(filteredMovies);
            })
            .catch(err => console.error(err))
            .finally(() => {
                setIsLoading(false)
                resetSearch()
            });
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            mainApi.getCurrentProfile(token)
                .then((data) => {
                    setCurrentUser(data);
                    setLoggedIn(true);
                    history.push('/movies');
                });
        };
    }, [history]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Header isMain={true} loggedIn={loggedIn} onSignOut={onSignOut}/>
                    <Switch>
                        <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
                        <ProtectedRoute
                            path="/movies"
                            loggedIn={loggedIn}
                            isLoading={isLoading}
                            movies={movies}
                            searchProps={searchProps}
                            handleMovie={handleMovie}
                            onMovieSearchSubmit={onMovieSearchSubmit}
                            component={Movies}
                        />
                        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} isSaved={true} component={Movies} />
                        <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} />
                        <Route path="/signup" render={() => {
                            return <Register loggedIn={loggedIn} onRegister={onRegister} />
                        }}/>
                        <Route path="/signin" render={() => {
                            return <Login onLogin={onLogin}/>
                        }} />
                        <Route path="/*" component={NotFoundError} />
                    </Switch>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
