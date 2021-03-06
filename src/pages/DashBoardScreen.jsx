import React from 'react'
import HeaderDashBoard from '../components/dashBoard/HeaderDashBoard'
import AddTaskCircleButton from '../components/ui/AddTaskCircleButton'
import ModalAddTaskEvent from '../components/ui/ModalAddTaskEvent'
import Navbar from '../components/ui/Navbar'
import SideBar from '../components/ui/SideBar'
import TaskEventTimeLine from '../components/ui/TaskEventTimeLine'


const DashBoardScreen = () => {
    return (
        <div className="DashBoardScreen_main">
            <div className="navBard_wrapper">
                <Navbar/>

            </div>
            
            {/* SideBar */}
            <div className="sideBar_right is-hidden-mobile ">
                <SideBar />
            </div>

            <div className="taskListContent">
                <div className="DashBoardScreen_taskList-header">
                    <HeaderDashBoard />
                </div>
                <div className="DashBoardScreen_taskList-content">
                    < TaskEventTimeLine />
                    < AddTaskCircleButton />
                </div>
            </div>
            <ModalAddTaskEvent />
        </div>
    )
}

export default DashBoardScreen
