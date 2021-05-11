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

    const [currentUser, setCurrentUser] = useState();
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Header isMain={true} loggedIn={loggedIn}/>
                    <Switch>
                        <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
                        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
                        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} isSaved={true} component={Movies} />
                        <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} />
                        <Route path="/signup" component={Register}/>
                        <Route path="/signin" component={Login} />
                        <Route path="/*" component={NotFoundError} />
                    </Switch>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
