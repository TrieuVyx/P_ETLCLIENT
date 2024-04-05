import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from "antd"
import MidLogin from './midLogin'
import { Toaster} from 'react-hot-toast'

const formStyle = {
    maxWidth: 500,
    background:"#f5f5f5",
    borderRadius:"10px",
    padding :"20px"
}
const formCenterStyle ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}
export default function Login() {

    const [email, setEmail] = useState("")
    const [passWord, setPassword] = useState("")
        
    return (

        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={formStyle}
            initialValues={{
                remember: true,
            }}
            method='POST'
            onFinish={()=>{
                MidLogin(email,passWord)
            }}
            // onFinishFailed={onFinishFailed}
        >
            <h1>Login</h1>
            <Toaster position='top-right' reverseOrder={false}></Toaster>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="passWord"
                rules={[
                    {
                        required: true,
                        message: 'Please input your passWord!',
                    }
                ]}
            >
                <Input.Password name="passWord" value={passWord} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                style={formCenterStyle}
                wrapperCol={{
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                style={formCenterStyle}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}