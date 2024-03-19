import { Layout } from "antd"
import Navbar from "../component/header/navbar/navbar"
// import {theme,Breadcrumb } from "antd"

const { Header, Footer, Content, Sider } = Layout;
const headerStyle = {
    background: "rgba(0, 0, 0, 0.88)"
}
export default function homePages() {
    return (
        <div className="container">
            <Layout>
                <Sider width="25%"><Navbar/></Sider>
                <Layout>
                    <Header style={headerStyle}></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}