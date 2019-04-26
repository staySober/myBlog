import React, { Component } from 'react';
import '../css/styles.css';
import { Menu, Icon } from 'antd';
import { post } from '../req/http';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// 博客类型列表
const blogType = []

// 当前选中的类型
const currentType = ""

class Side extends Component {

    constructor(props) {
        super(props);
        this.state = { type: Object };
    }
   
    componentDidMount() {
        post('/getBlogType', '')
            .then((res) => {

                //this.setState({apiRes:res})
                res.forEach(element => {
                    blogType.push(element)
                });

                this.setState({ type: blogType })
            });

    }

    render() {
    
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 200 }}
                    //defaultSelectedKeys={['1']}
                    //defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme='light'
                >
                    <SubMenu key="note" title={<span><Icon type="appstore" /><span>笔记</span></span>}>
                        {
                            blogType.map(function (type) {
                                //return <Menu.Item key={type}><Link exact='true' to='/'>{type}</Link></Menu.Item> 
                                return <SubMenu key={type.name} title={<span><Icon type="appstore" /><span>{type.name}</span></span>}>
                                    {
                                        type.subTtile.map(function(subTtile){
                                            return <Menu.Item key={subTtile.id}><Link exact='true' to= {'/blog/' + subTtile.id}>{subTtile.title}</Link></Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            })
                        }

<Menu.Item key="/note"><Link exact='true' to='/note'>Note</Link></Menu.Item>


                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>label2</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>label3</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Side;