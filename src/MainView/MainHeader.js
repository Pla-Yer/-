import { Layout, Menu, Image, Avatar, Dropdown, Button, Modal, Form, Input, message } from "antd";
import "./MainHeader.css";
import { Link } from "react-router-dom";
import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router';
 


const { Header } = Layout;

export default class MainHeader extends Component {
  state = {
    path: '/',
    isChangePasswordShow: false,

  }



  UNSAFE_componentWillMount() {
    const path = this.props.location.pathname
    if (path === '/') {
      this.setState({ path: '/' })  // 设置默认选中地址
    }
    else {
      this.setState({ path })
    }

  }
  render() {


    const id = this.props.match.params.id
    const { path, isChangePasswordShow } = this.state
   

    return (

      <Layout>
        <Header className="main-header">
          <div className="logo">
            抗干扰测试验证平台
          </div>
          
        </Header>
      </Layout>
    )
  }
}


