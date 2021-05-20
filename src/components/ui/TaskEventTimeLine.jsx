import { Divider, Tag } from 'antd'
import { CheckCircleOutlined,
         ClockCircleOutlined,
         DeleteOutlined,
         EditOutlined,
         PauseCircleOutlined,
         PlayCircleOutlined } from '@ant-design/icons';

import React from 'react'



const TaskEventTimeLine = () => {
    return (
        <div className="wrapper__quotes">
        <h1>TimeLine Example Todo</h1>
        <div className="wrapper__line__quotes">
            <ul>
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
                        <div className="icons-list">
                            <PlayCircleOutlined />
                            <PauseCircleOutlined />
                            <EditOutlined twoToneColor="#eb2f96" className="pointer"/>
                            <DeleteOutlined className="pointer"/>
                        </div>
                    </div>
                </li>

                <li>
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
                </li>

                
            </ul>
        </div>
    </div>
    )
}

export default TaskEventTimeLine
