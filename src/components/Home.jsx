import '../css/Home.scss'
import { useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import {calculateDday} from '../utils/caculateDday.jsx'
import {changeTomillisecond, stringToDate} from '../utils/commonUtils.jsx'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'

const Home = () => {
    let dDay = calculateDday();
    const [selectedDateList, setSelectedDateList] = useState([]);
    let datingDayList = [
        {placeName: '대전', startDate: '2024-05-17', endDate: '2024-05-19'},
        {placeName: '성남', startDate: '2024-05-24', endDate: '2024-05-26'},
        {placeName: '대전', startDate: '2024-05-31', endDate: '2024-06-02'},
        {placeName: '대전', startDate: '2024-06-06', endDate: '2024-06-07'},
    ];

    const formatDay = (locale, date) => date.getDate();

    const clickCalendar = (value) => {
        const filteredDates = datingDayList.filter((item) => {
            return (
                changeTomillisecond(stringToDate(item.startDate)) <= changeTomillisecond(value) &&
                changeTomillisecond(stringToDate(item.endDate)) >= changeTomillisecond(value)
            );
        });
        setSelectedDateList(filteredDates);
        console.log(filteredDates);
    };

    return (
        <div className="content">
            <div className="d-day-title">
                <img
                    className="person-img"
                    src="/assets/images/IMG_1747.png"
                />
                <div className="d-day-content">
                    <div className="d-day-text">뀽<GoHeartFill className="heart"/>콩</div>
                    <div className="d-day-text">우리 만난지</div>
                    <div className="d-day-text">D+{dDay}</div>
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
                    onClickDay={clickCalendar}
                />
                {selectedDateList.map((item, idx) => (
                    <div className="normal-content" key={idx}>
                        <span className="place-name main-city-1">{item.placeName}</span>
                        <span>{item.startDate} ~ {item.endDate}</span>
                    </div>
                ))}
            </div>
            <div>
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 공지
                </div>
                <div className="normal-content">
                    <ul>
                        <li>대전 한빛탑광장 한우축제 가고싶다 힝</li>
                    </ul>
                </div>
            </div>
            <div id="foodMenus">
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 금주 식단
                </div>
                <div className="normal-content">
                    <ul>
                        <li>서브웨이 힝.. 다이어트 해야해</li>
                        <li>나머지는 미정이야 힝</li>
                    </ul>
                </div>
            </div>
            <div id="buckets">
                <div className="app-title">
                    <GoHeartFill className="heart list"/> 우리의 버킷리스트
                </div>
                <div className="normal-content">
                    <div className="check-lists">
                        <div><MdOutlineCheckBox /> 휴게소에서 알감자 사먹기</div>
                        <div><MdOutlineCheckBoxOutlineBlank /> 가마치 통닭 바깥에서 치킨이랑 술마시기</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
