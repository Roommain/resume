import { Form, Icon, Input, Button, message, Checkbox } from 'antd';
import axios from 'axios'
import React, { Component } from "react";
import "./login.css";
// import "../libs/bounce";
class Login extends Component {
    state = {
        ueserName:'',
        password:'',
    }
    handleSubmit = e => {
        e.preventDefault();

        // axios.get('https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo').then(res => {
        //     console.log(res);
        // })
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var param = 'username=' + values.username + '&password=' + values.username;
                axios.post('/api/login',param, {
                    headers: headers
                }).then(function (res) {
                    if (res.data.code == '200') { 
                        message.info(res.data.msg);
                    }
                })
            }
        });
    };
    register = () => {
        this.props.switchShowBox()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <h3 className='title'>管理员登录</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入账号' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="账号"
                                allowClear
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                                allowClear
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className="remember">记住密码</Checkbox>)}
                        <a className="login-form-forgot" href="">找回密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        <span className='registerBtn' onClick={this.register.bind(this)}>注册</span>
                    </Form.Item>
                </Form>                
            </div>

        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm