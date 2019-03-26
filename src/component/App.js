import React, { Component } from 'react';
import '../css/App.css';
import HeaderComponent from './Header';
import SiderComponent from './Side';
import { Layout, Menu, Avatar} from 'antd';

const { Header, Footer, Sider, Content, } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      
      <Layout className='autoHeight'>
        <Sider>
          <Avatar shape="square" size={64} icon="user" />
          <SiderComponent/>
        </Sider>

        <Layout>
          <Header className="header">
            <HeaderComponent />
          </Header>

          <Content>
            conteent
          </Content>

          <Footer>
          Footer 
          </Footer>

        </Layout>
      </Layout>
    
    );
  }
}

export default App;
