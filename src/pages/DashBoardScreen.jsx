import React from 'react'
import HeaderDashBoard from '../components/dashBoard/HeaderDashBoard'
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
                </div>
            </div>
        </div>
    )
}

export default DashBoardScreen
