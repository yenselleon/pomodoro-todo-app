import React from 'react'
import Navbar from '../components/ui/Navbar'
import TaskEventTimeLine from '../components/ui/TaskEventTimeLine'

const DashBoardScreen = () => {
    return (
        <div className="DashBoardScreen_main">
            <div className="navBard_wrapper">
                <Navbar />

            </div>

            <div className="sideBar_right is-hidden-mobile ">

            </div>
            <div className="taskListContent">
                <div className="DashBoardScreen_taskList-header">

                </div>
                <div className="DashBoardScreen_taskList-content">
                    < TaskEventTimeLine />
                </div>
            </div>
        </div>
    )
}

export default DashBoardScreen
