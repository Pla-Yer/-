import { Switch, Route } from "react-router-dom";
import MainHeader from "./MainHeader";
import { GithubOutlined,} from '@ant-design/icons';
import Home from "./Home/Home";
import axios from 'axios';
import { Layout} from 'antd';
import "./MainLayout.css";


const { Header, Content, Footer } = Layout;

const MainViewLayout = () => {
  return (
       <Layout >
         <Header className="layout-header">
          <Route path="/" component={MainHeader}></Route>
        </Header>

        <Content style={{width:"99vw"}}>
          <Home></Home>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
            height:'7vh'
          }}
        >
      Anti-Interference Testing System ©2022 Created by YPF <GithubOutlined /> https://gitee.com/yang-pengfei1999
    </Footer>
      </Layout>
    
  );
};

export default MainViewLayout;
