import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from "antd"
// import axios from 'axios'
import MidLogin from './midLogin'

const formStyle = {
    maxWidth: 600,
}



export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
        
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
            onFinish={()=>{
                MidLogin(email,password)

            }}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <h1>Login</h1>
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
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    }
                ]}
            >
                <Input.Password name="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}