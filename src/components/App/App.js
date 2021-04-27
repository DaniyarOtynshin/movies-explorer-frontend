import React from 'react';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="page__content">
      <Header />
      <Movies />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
