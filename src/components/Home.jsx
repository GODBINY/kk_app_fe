import '../css/Home.scss'
import { Calendar } from 'antd-mobile';
import { GoHeartFill } from "react-icons/go";
import {calculateDday} from '../utils/caculateDday.jsx'

const Home = () => {
    let dDay = calculateDday();
    return (
        <div className="content">
            <div className="d-day-title">
                <img
                    className="person-img"
                    src="/assets/images/IMG_1747.png"
                />
                <div className="d-day-content">
                    <div>뀽<GoHeartFill className="heart"/>콩</div>
                    <div>우리 만난지</div>
                    <div>D+{dDay}</div>
                </div>
                <img
                    className="person-img"
                    src="/assets/images/IMG_8314.jpeg"
                />
            </div>
            <div id="plans">
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 일정
                </div>
                <Calendar className="default-background calendar"/>
            </div>
            <div id="buckets">
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 버킷리스트
                </div>
                <div className="normal-content">
                    <ul>
                        <li>눈오는 날 가로등 아래에서 뽀뽀하기</li>
                        <li>새해맞이 같이하기</li>
                    </ul>
                </div>
            </div>
            <div id="foodMenus">
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 금주 식단
                </div>
                <div className="normal-content">
                    <ul>
                        <li>유자 파스타 샐러드</li>
                        <li>지.코.바</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Home;