import React, { Component } from 'react';
import '../css/App.css';
import HeaderComponent from './Header';
import SiderComponent from './Side';
import { Layout,} from 'antd';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Note from './Note';
import FooterComponent from './Footer';
import CardDesc from './CardDesc';

const { Header, Footer, Sider, Content, } = Layout;

class App extends Component {
  render() {
    return (
      
      <Layout className='autoHeight'>
        <Sider>
         <center><h3>Speeder</h3></center>
          <CardDesc></CardDesc>
          <SiderComponent/>
        </Sider>

        <Layout>
          <Header className="header">
            <HeaderComponent />
          </Header>

          <Content>
            <main>
              <Switch>    
                <Route exact path='/' component={Home}/>
                <Route exact path='/note' component={Note}/>
                <Route exact path='/gallery' component={Gallery}/>
                <Redirect to="/" />
              </Switch>
            </main>
          </Content>

          <Footer>
            <FooterComponent></FooterComponent>
          </Footer>

        </Layout>
      </Layout>
    
    );
  }
}

export default App;
