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
                        title="TSON高性能排气"
                        description="www.tsonracing.com   tel: 1560122112"
                    />
                </Card>
            </div>
        );
    }
}

export default CardDesc;