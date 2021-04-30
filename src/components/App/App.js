import React from 'react';
import { Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundError from '../NotFoundError/NotFoundError';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  return (
    <div className="page__content">
      <Route exact path="/">
        <Header isMain={true}/>
        <Main />
      </Route>
      <Route path="/movies">
        <Header isMain={false}/>
        <Movies />
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
      <Footer />
     {/* <NotFoundError /> */}
    </div>
  );
}

export default App;
