import React from 'react'
import { Timeline } from "antd";
import "antd/dist/antd.css";


const TaskEventTimeLine = () => {
    return (
        <div className="TaskEventTimeLine_main mt-5">
            <Timeline mode="left">
                <Timeline.Item 
                    label="2015-09-01"
                    >
                    <div className="card">
                        <h1 className="title-card">title</h1>
                        <p className="Note">note</p>
                    </div>
                </Timeline.Item>
                <Timeline.Item>step2 2015-09-01</Timeline.Item>
                <Timeline.Item>step3 2015-09-01</Timeline.Item>
                <Timeline.Item>step4 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
    )
}

export default TaskEventTimeLine
