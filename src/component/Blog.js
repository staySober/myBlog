import React, { Component, Fragment } from 'react'
import '../css/markdown.css'
import {post} from '../req/http';


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {blog:""}
    }

    componentDidMount() {
        var data = { 'id': this.props.match.params.id }

        post('/fetchBlogById', data)
            .then((res) => {
                //this.setState({apiRes:res})
                const data = {
                    "id": res.id,
                    'title': res.title,
                    'content': res.content,
                    'type': res.type,
                    'createTime': res.createTime,
                    'updateTime': res.updateTime
                }
    
                this.setState({blog:data})
            });

    }


    render() {
        // markdown
        return (
            <Fragment>
              {this.state.blog.content}
            </Fragment>
        );
    }
}
export default Blog;