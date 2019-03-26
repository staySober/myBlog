
import React, {Component} from 'react';
import '../css/styles.css';

import { Menu } from 'antd';
const {SubMenu} = Menu;


class Header extends Component {
    
    render() {
        return(
          
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">主页</Menu.Item>
                    <Menu.Item key="2">笔记</Menu.Item>
                    <Menu.Item key="3">相册</Menu.Item>
                </Menu>
            
        );
    }
}

export default Header;