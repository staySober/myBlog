import React, { Component } from "react";
import {Card} from 'antd';
import Meta from "antd/lib/card/Meta";

class CardDesc extends Component {
    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>
            </div>
        );
    }
}

export default CardDesc;