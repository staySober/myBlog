import React, { Component } from "react";
import {Card} from 'antd';
import Meta from "antd/lib/card/Meta";

class CardDesc extends Component {
    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 200, marginTop:39}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                        title="blog"
                        description="www.waitSober.com   weibo: staySober丶"
                    />
                </Card>
            </div>
        );
    }
}

export default CardDesc;