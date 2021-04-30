import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

const Main = (props) => {
    return (
        <>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
        </>
    )
};

export default Main;