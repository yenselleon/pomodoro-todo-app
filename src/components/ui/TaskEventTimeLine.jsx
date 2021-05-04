import { Divider, Tag } from 'antd'
import React from 'react'



const TaskEventTimeLine = () => {
    return (
        <div className="wrapper__quotes">
        <h1>TimeLine Example Todo</h1>
        <div className="wrapper__line__quotes">
            <ul>
                <li>
                    <div className="label-hours">40min</div>
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
                    </div>
                </li>

                <li>
                    <div className="label-hours">40min</div>
                    <div className="conten__quotes">
                        <h3 className="title-note">Comer</h3>
                        <span className="note">Recordar comer en la tarde</span>
                    </div>
                </li>

                <li>
                    <div className="label-hours">40min</div>
                    <div className="conten__quotes">
                        <h3 className="title-note">Comer</h3>
                        <span className="note">Recordar comer en la tarde</span>
                    </div>
                </li>

                <li>
                    <div className="label-hours">40min</div>
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
