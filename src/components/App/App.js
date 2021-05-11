import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';
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
                <Route exact path="/">
                    <Header isMain={true} loggedIn={loggedIn}/>
                    <Main />
                </Route>
                <Route path="/movies">
                    <Header isMain={false}/>
                    <Movies isSaved={false}/>
                </Route>
                <Route path="/saved-movies">
                    <Header isMain={false}/>
                    <Movies isSaved={true}/>
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/not-found-error">
                    <NotFoundError />
                </Route>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
