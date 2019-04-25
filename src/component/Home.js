import React, { Component} from 'react';
import {Carousel} from 'antd';
import '../css/styles.css';
class Home extends Component {
    render() {
        return(
            <center>
                 <Carousel autoplay>
                    <div><img src={require('../assets/gt3RS.jpg')} alt="" className="flashImg"></img></div>
                    <div><img src={require('../assets/R32.jpg')} alt=""  className="flashImg"></img></div>
                    <div><img src={require('../assets/R34.jpg')}  alt="" className="flashImg"></img></div>
                    <div><img src={require('../assets/gt3RS.jpg')} alt=""  className="flashImg"></img></div>
                </Carousel>
            </center>
        );
    }
}

export default Home;