import '../css/Home.scss'
import { GoHeartFill } from "react-icons/go";
import {calculateDday} from '../utils/caculateDday.jsx'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'


const Home = () => {
    let dDay = calculateDday();
    const formatDay = (locale, date) => date.getDate();
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
            <div id="plans" >
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 일정
                </div>
                <Calendar
                    className="calendar"
                    calendarType="gregory"
                    formatDay={formatDay}
                />
                <div className="normal-content">
                    <span className="placeName">대전</span>
                    <span>2024.05.17 ~ 2024.05.19</span>
                </div>
            </div>
            <div>
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 공지
                </div>
                <div className="normal-content">
                    <ul>
                        <li>집코바 냠냠</li>
                    </ul>
                </div>
            </div>
            <div id="foodMenus">
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 금주 식단
                </div>
                <div className="normal-content">
                    <ul>
                        <li>집코바 냠냠</li>
                        <li>해물순두부찌개</li>
                        <li>콩나물소면비빔국수</li>
                    </ul>
                </div>
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
        </div>
    );
};


export default Home;