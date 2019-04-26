import React, { Component } from "react";
import {Steps, Divider } from 'antd';
import '../css/styles.css';
class Footer extends Component {
   
    render() {
        const Step = Steps.Step;
        return (
            <div>
                <Divider>footer</Divider>
                {/* <Steps progressDot current={1}>
                    <Step title="贫穷" />
                    <Step title="搬砖" />
                    <Step title="暴富" />
                </Steps> */}
            </div>
        );
    }
}

export default Footer;