import { Layout } from "antd"
import Navbar from "../component/header/navbar/navbar"
import ReloadRouter from "./router/routerReloadConfig";
import TableStaff from "./staff/tableStaff";
const { Header, Footer, Content, Sider } = Layout;
const headerStyle = {
    background: "rgba(0, 0, 0, 0.88)"
}


export default function staffPages() {
    return (
        <div className="w-100">
            <Layout >
                <Sider width="25%"><Navbar/></Sider>
                <Layout >
                    <Header style={headerStyle}></Header>
                    <Content><TableStaff/></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>

        </div>
            
    )
}