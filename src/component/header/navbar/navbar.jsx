import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const getItem = (label, key, icon, children,collapsed) => {
    return {
        key,
        label,
        icon,
        children,
        collapsed
    }
}

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const router = useNavigate();

    const  setSelectedMenuItem = async (e) =>{

        if(e.key === "0"){
            e.key = router('/')
            return true

        }
        if(e.key === "4" ){
            e.key = router('/staff')
            return true
        }
        
        if(e.key === "7"){
            e.key = router('/login')
            return true

        }
        if(e.key === "8"){
            localStorage.removeItem("accessToken")
            e.key = router('/login')
            return true

        }
    }

    return (
        <Layout
            style={{ minHeight: "100vh" }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}  >
                <div className="demo-logo-vertical"></div>
                <Menu theme='dark' defaultSelectedKeys={[1]} mode="inline" items={[
                    getItem("ANT-ETL", "0"),
                    getItem("Dashboard", "1", <PieChartOutlined />),
                    getItem("Desktop", "2", <DesktopOutlined />),

                    getItem("Quản lý", "3", <TeamOutlined />, 
                    [
                        getItem("Nhân Viên", "4"), 
                        getItem("Sản Phẩm", '5')
                    ]),
                    getItem("File", "6", <FileOutlined />),
                    getItem("Login", "7", <UserOutlined />),
                    getItem("Logout", "8", <UserOutlined />)
                ]}
               
                onClick={(e) => setSelectedMenuItem(e)}
                ></Menu>
            </Sider>

        </Layout>
    )
}