import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

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

function App() {

    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Switch>
                    <ProtectedRoute exact path="/" loggedIn={loggedIn}>
                        <Header isMain={true} loggedIn={loggedIn}/>
                        <Main />
                    </ProtectedRoute>
                    <ProtectedRoute loggedIn={loggedIn} path="/movies">
                        <Header isMain={false}/>
                        <Movies isSaved={false}/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                        <Header isMain={false}/>
                        <Movies isSaved={true}/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                        <Profile />
                    </ProtectedRoute>
                    <Route path="/signup">
                        <Register />
                    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/not-found-error">
                        <NotFoundError />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
