import {Layout} from "antd"
import Login from "./form/login"


const {Header, Content, Footer} = Layout

const loginStylePage = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    minHeight:"100vh",
    borderRadius:"50px"

}
const contentStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}


export default function LoginPage(){
    return (
        <div className="container" style={loginStylePage}>
            <Layout>
                <Content style={contentStyle}>
                    <Login/>
                </Content>
            </Layout>

        </div>
    )
}