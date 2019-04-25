import React, { Component } from 'react';
import  {post} from '../req/http';

class Note extends Component {
    
    constructor(props) {
        super(props);
        this.state ={apiRes: Object};
    }

    componentDidMount(){
        post('/version/getVersion','')
            .then((res)=> this.setState({apiRes:res}));
        console.log(this.state.apiRes);
    }


    render() {
        return(
            <div>
                <h2>
                    apiRes: {this.state.apiRes.data}
                </h2>
            </div>
        );
    }
}

export default Note;