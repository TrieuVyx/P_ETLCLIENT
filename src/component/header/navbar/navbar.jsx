import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'
import {Layout, Menu} from "antd";
import React, { useState } from "react";


const { Header, Content, Footer, Sider } = Layout;
const getItem = (label, key, icon, children) => {
    return {
        key,
        label,
        icon,
        children
    }
}
const Item = [
    getItem("ANT-ETL"),
    getItem("option 1", "1", <PieChartOutlined />),
    getItem("option 2", "2", <DesktopOutlined />),
  
    getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6"), getItem("Team 2", '8')]),
    getItem("File", "9", <FileOutlined />),
    // getItem("User", "sub1", <UserOutlined />, [
    //     getItem("Login", '3')
    // ])
    getItem("Login", "3", <UserOutlined />)
]

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{ minHeight: "100vh" }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"></div>
                <Menu theme='dark' defaultSelectedKeys={[1]} mode="inline" items={Item}></Menu>
            </Sider>
            
        </Layout>
    )
}