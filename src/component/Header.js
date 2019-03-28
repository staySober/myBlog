
import React, {Component} from 'react';
import '../css/styles.css';
import { Menu, Avatar } from 'antd';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        const {pathname} = window.location;
    
        return(
            <div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={[pathname]}
                    style={{ lineHeight: '60px' }}
                >
                    <Menu.Item key="/"><Link exact='true' to='/'>主页</Link></Menu.Item>
                    <Menu.Item key="/note"><Link exact='true' to='/note'>笔记</Link></Menu.Item>
                    <Menu.Item key="/gallery"><Link exact='true' to='/gallery'>相册</Link></Menu.Item>
                </Menu>
                <Avatar className='iconUser'style={{ backgroundColor: '#e88f9d', verticalAlign: 'large' }} size="large" shape='square' 
                            src={require('../assets/icon2.jpg')}>
                    Sober
                </Avatar>
                </div>
            
        );
    }
}

export default Header;