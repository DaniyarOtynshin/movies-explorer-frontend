import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundError from '../NotFoundError/NotFoundError';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

import auth from '../../utils/Auth';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const history = useHistory();

    const onLogin = ({ password, email }) => {
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

    const onRegister = ({ email, password, name }) => {
        auth.register(password, email, name)
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

    const onEditProfile = ({ email, name }) => {
        const token = localStorage.getItem('token');
        mainApi.updateCurrentProfile(email, name, token)
            .then(data => {
                setCurrentUser({
                    email: data.email,
                    name: data.name
                })
                history.push('/');
            })
    }

    const handleMovie = (isChecked, movie) => {
        const token = localStorage.getItem('token');
        isChecked
        ? handleMovieDelete(movie, token)
        : handleMovieAdd(movie, token)
    }

    const handleMovieAdd = (movie, token) => {
        mainApi.addMovie(movie, token)
            .then((savedMovie) => {
                setSavedMovies([...savedMovies, savedMovie]);
            })
        .catch(err => console.error(err))
      }
    
    const handleMovieDelete = (movie, token) => {
        mainApi.deleteMovie(movie._id, token)
            .then((_) => {
                const newSavedMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== movie.movieId);
                setSavedMovies(newSavedMovies);
            })
        .catch(err => console.error(err))
    }

    const filterMovies = (moviesApi, searchValues) => {
        const filteredMovies =  moviesApi.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(searchValues.search.toLowerCase())
        })
        return filteredMovies;
    }

    const filterSavedMovies = (savedMoviesApi, searchValues) => {
        const filteredSavedMovies = savedMoviesApi.filter((savedMovie) => {
            return savedMovie.nameRU.toLowerCase().includes(searchValues.search.toLowerCase())
        })
        return filteredSavedMovies;
    }

    const onMovieSearchSubmit = (e, searchValues) => {
        e.preventDefault();
        setIsLoading(true);
        const token = localStorage.getItem('token');
        Promise.all([
            moviesApi.getMovies(),
            mainApi.getAllMovies(token),
        ])
        .then(([moviesApi, savedMoviesApi]) => {
            const filteredMovies = filterMovies(moviesApi, searchValues);
            const filteredSavedMovies = filterSavedMovies(savedMoviesApi, searchValues);
            setMovies(filteredMovies);
            setSavedMovies(filteredSavedMovies);
        })
        .catch(err => console.error(err))
        .finally(() => {
            setIsLoading(false)
        });
    };

    const toggleFilter = () => {
        setIsFiltered((prevIsFiltered) => !prevIsFiltered)
    }

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
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => {
                                return <Main onSignOut={onSignOut} isMain={true} loggedIn={loggedIn}/>
                            }}
                        />
                        <ProtectedRoute
                            path="/movies"
                            loggedIn={loggedIn}
                            onSignOut={onSignOut}
                            isMain={false}
                            isSaved={false}
                            isLoading={isLoading}
                            movies={movies}
                            savedMovies={savedMovies}
                            handleMovie={handleMovie}
                            onMovieSearchSubmit={onMovieSearchSubmit}
                            handleFilter={toggleFilter}
                            isFiltered={isFiltered}
                            component={Movies}
                        />
                        <ProtectedRoute
                            path="/saved-movies"
                            loggedIn={loggedIn}
                            onSignOut={onSignOut}
                            isMain={false}
                            isSaved={true}
                            isLoading={isLoading}
                            savedMovies={savedMovies}
                            handleMovie={handleMovie}
                            onMovieSearchSubmit={onMovieSearchSubmit}
                            handleFilter={toggleFilter}
                            isFiltered={isFiltered}
                            component={Movies}
                        />
                        <ProtectedRoute
                            path="/profile"
                            isMain={false}
                            onSignOut={onSignOut}
                            loggedIn={loggedIn}
                            component={Profile}
                            onEditProfile={onEditProfile}
                        />
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
