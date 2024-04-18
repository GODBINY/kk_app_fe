import React from 'react';
import { Card, Calendar } from 'antd-mobile';
import {
} from '@ant-design/icons';

class App extends React.Component {

    render() {
        return (
            <div>
                {/*<Card>*/}
                {/*    <Card.Header title="뀽콩" />*/}
                {/*    <Card.Body />*/}
                {/*</Card>*/}
                <div style={{ marginTop: '50px' }}>
                    <h2>우리의 일정</h2>
                    <Calendar />
                    {/* 캘린더 컴포넌트를 넣어주세요 */}
                </div>
            </div>
        );
    }
}

export default App;
