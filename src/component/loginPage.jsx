import {Layout} from "antd"
import Login from "./form/login"
import { Toaster} from 'react-hot-toast'


const { Content} = Layout

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

const layoutStyle ={
    background: "white"
}
export default function LoginPage(){
    return (
        <div className="container" style={loginStylePage}>
            <Toaster position='top-right' reverseOrder={false}></Toaster>

            <Layout style={layoutStyle}>
                <Content style={contentStyle}>
                    <Login/>
                </Content>
            </Layout>

        </div>
    )
}