import { Switch, Route } from "react-router-dom";
import React, { Component } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import ProjectList from "../ProjectList/ProjectList";
import DeviceList from "../DeviceList/DeviceList";
import Event1 from "../events/event1"
import './Home.css'


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

export default class Home extends Component {
  render() {
    return (
      <div className='project-layout'>
        <div className='project-left'>
          <Menu style={{height:'100%'}}  mode="inline">
            <Menu.Item>
              <Link to={"/"}>
                工程
              </Link>
            </Menu.Item>
            <Menu.Item>
            <Link to={"/DeviceList"}>
              设备
            </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/Event1"}>
              事件
              </Link>
            </Menu.Item>
            <Menu.SubMenu title="系统管理">
              <Menu.Item>微服务监控</Menu.Item>
              <Menu.Item>用户管理</Menu.Item>
            </Menu.SubMenu>
          </Menu>;
        </div>

        <div className='project-right'>
          <Switch>
            <Route path="/" exact component={ProjectList}></Route>
            <Route path="/DeviceList" exact component={DeviceList}></Route>
            <Route path="/Event1" exact component={Event1}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
