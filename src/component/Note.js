import React, { Component } from 'react';
import  {post} from '../req/http';
import { Table, Divider, Tag } from 'antd';


// const dataSource = [{
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号'
//   }, {
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号'
//   }];



const columns = [{
    title: '标题',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
}, {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
}];

const blog = []


class Note extends Component {
    constructor(props) {
        super(props);
        this.state ={blog: Object};
    }

    componentDidMount(){
        post('/fetchBlog','')
            .then((res)=> {
    
                //this.setState({apiRes:res})
                res.forEach(element => {
                    const data = {
                        "id" : element.id,
                        'title': element.title,
                        'content': element.content
                    }
                    blog.push(data)
                });

                this.setState({blog: blog})
            });
        
    }


    render() {
        return(
            <div>
                <Table dataSource={blog} columns={columns} />
            </div>
        );
    }
}

export default Note;