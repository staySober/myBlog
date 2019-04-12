import React, { Component,Fragment } from 'react';
import  {post} from '../req/http';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state ={data: '123'};
    }

    componentDidMount(){
        this.setState({data: post('/version/getVersion','').data});
        var current = post('/version/getVersion','');
        console.log(current);
    }

    render() {
        return(
            <Fragment>{this.state.data}</Fragment>
        );
    }
}

export default Note;