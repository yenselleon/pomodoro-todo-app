import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const HeaderTimerView = () => {


    return (
        <div className="main_headerTimerView">
            <svg className="timerContainer" width="130" height="130">
                <CircularProgressbar value={50} text={`${'12:00'}`}/>
            </svg>
        </div>
    )
}

export default HeaderTimerView;
