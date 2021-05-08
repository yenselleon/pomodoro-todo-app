import React from 'react'
import { Menu} from 'antd';
import {
    SettingOutlined,
    EditFilled,
    UnorderedListOutlined,
} from '@ant-design/icons';
import {
    Link
  } from "react-router-dom";



const SideBar = () => {
    return (
        <div>
            <Menu
                style={{ width: "auto", backgroundColor: "rgba(247, 247, 247, 0.5)" }}
                defaultSelectedKeys={['1']}
                mode="vertical"
                theme="light"
            >
                
                <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                    <Link to="/">
                        Task List
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<EditFilled />}>
                    Edit Perfil
                </Menu.Item>
                <Menu.Item key="3" icon={<SettingOutlined />}>
                    Config Enviroment
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default SideBar
