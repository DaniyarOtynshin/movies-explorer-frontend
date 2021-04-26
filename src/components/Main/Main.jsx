import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';

const Main = (props) => {
    return (
        <>
            <Promo />
            <NavTab />
            <AboutProject />
        </>
    )
};

export default Main;