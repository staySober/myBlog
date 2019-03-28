import React, { Component} from 'react';
import {Carousel} from 'antd';
import '../css/styles.css';
class Home extends Component {
    render() {
        return(
            <center>
                 <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </center>
        );
    }
}

export default Home;