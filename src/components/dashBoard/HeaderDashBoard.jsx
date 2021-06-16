import React from 'react';
import imgHeader from '../../images/headerDashboard/pexels-pixabay-459225.jpg';
import HeaderTimerView from './HeaderTimerView';

const HeaderDashBoard = () => {
    return (
        <div className="headerDashBoard-main">
            <img className="img__background-headerDashBoard" src={imgHeader} alt="paisaje"/>
            <HeaderTimerView/>
        </div>
    )
}

export default HeaderDashBoard;
