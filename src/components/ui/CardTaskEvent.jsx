import React from 'react'
import { Divider, Tag } from 'antd'
import { /* CheckCircleOutlined */
         ClockCircleOutlined,
         /* PauseCircleOutlined */} from '@ant-design/icons';

import DisplayBtnControls from './DisplayBtnControls';


const CardTaskEvent = () => {
    

    return (
        <li>
            <div className="label-hours">40min</div>
            <ClockCircleOutlined className="status-icon"/>
            <div className="conten__quotes">
                <h3 className="title-note">Comer</h3>
                <span className="note">Recordar comer en la tarde</span>
                <div>
                    <Divider orientation="left" className="tags-divider">Tags</Divider>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                </div>
                <DisplayBtnControls />
            </div>
        </li>

        /* <li>
            <div className="label-hours">40min</div>
            <PauseCircleOutlined className="status-icon"/>
            <div className="conten__quotes">
                <h3 className="title-note">Comer</h3>
                <span className="note">Recordar comer en la tarde</span>
            </div>
        </li>

        <li>
            <div className="label-hours">40min</div>
            <CheckCircleOutlined className="status-icon"/>
            <div className="conten__quotes">
                <h3 className="title-note">Comer</h3>
                <span className="note">Recordar comer en la tarde</span>
            </div>
        </li> */
    )
}

export default CardTaskEvent;
