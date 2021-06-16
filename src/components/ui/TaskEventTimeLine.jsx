import React from 'react'
/* import { Empty } from 'antd'; */
import CardTaskEvent from './CardTaskEvent';




const TaskEventTimeLine = () => {
    return (
        <div className="wrapper__quotes">
            <div className="wrapper__line__quotes">
                <ul>
                    
                    {/* <Empty/> */}
                    <CardTaskEvent />
                </ul>
            </div>
        </div>
    )
}

export default TaskEventTimeLine
