import React from 'react';
import {
    DeleteOutlined,
    EditOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined } from '@ant-design/icons';

import { startClock, pauseClock } from '../../helpers/timerProgressFunction';


const DisplayBtnControls = () => {
    const handleStartClock = () => {
        startClock(1,0);
    }

    const handlePauseClock = () => {
        pauseClock();
    }

    return (
        <div className="icons-list">
            <PlayCircleOutlined className="pointer" onClick={handleStartClock}/>
            <PauseCircleOutlined className="pointer" onClick={handlePauseClock}/>
            <EditOutlined twoToneColor="#eb2f96" className="pointer"/>
            <DeleteOutlined className="pointer"/>
        </div>
    )
}

export default DisplayBtnControls
