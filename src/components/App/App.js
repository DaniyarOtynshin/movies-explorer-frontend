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

function App() {

    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(true);
    const [isTokenCorrect, setIsTokenCorrect] = useState(false)


   const history = useHistory();

    const onLogin = (password, email) => {
        auth.login(password, email)
          .then(data => {
            if (data.token) {
              setLoggedIn(true);
              localStorage.setItem('token', data.token);
              setIsTokenCorrect(true);
              history.push('/')
            }
          })
          .catch(err => console.error(err))
      }

    const onRegister = (email, password, name) => {
        auth.register(email, password, name)
            .then(data => {
                setCurrentUser({
                    email: data.email,
                    password: data.password,
                    name: data.name
                })
            })
    };

    const onSignOut = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        history.push('/signin');
      };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            auth.getContent(token).then((res) => {
                if (res) {
                setCurrentUser(res);
                setLoggedIn(true);
                history.push('/');
                }
            })
            .catch(err => console.error(err))
        }
    }, [isTokenCorrect, history]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Header isMain={true} loggedIn={loggedIn} onSignOut={onSignOut}/>
                    <Switch>
                        <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
                        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
                        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} isSaved={true} component={Movies} />
                        <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} />
                        <Route path="/signup" onRegister={onRegister} component={Register}/>
                        <Route path="/signin" onLogin={onLogin} component={Login} />
                        <Route path="/*" component={NotFoundError} />
                    </Switch>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
