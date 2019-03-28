import React, { Component} from 'react';
import {Carousel} from 'antd';
import '../css/styles.css';
class Home extends Component {
    render() {
        return(
            <center>
                 <Carousel autoplay>
                    <div><img src={require('../assets/gt3RS.jpg')} className="flashImg"></img></div>
                    <div><img src={require('../assets/R32.jpg')} className="flashImg"></img></div>
                    <div><img src={require('../assets/R34.jpg')} className="flashImg"></img></div>
                    <div><img src={require('../assets/gt3RS.jpg')} className="flashImg"></img></div>
                </Carousel>
            </center>
        );
    }
}

export default Home;