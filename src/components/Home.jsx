import '../css/Home.scss'
import { useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { calculateDday } from '../utils/caculateDday.jsx'
import { changeTomillisecond, stringToDate } from '../utils/commonUtils.jsx'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'

const Home = () => {
    let dDay = calculateDday();
    const [selectedDateList, setSelectedDateList] = useState([]);
    let datingDayList = [
        { placeCode: 1, placeName: '대전', startDate: '2024-05-14', endDate: '2024-05-16' },
        { placeCode: 1, placeName: '대전', startDate: '2024-05-17', endDate: '2024-05-19' },
        { placeCode: 2, placeName: '성남', startDate: '2024-05-24', endDate: '2024-05-26' },
        { placeCode: 1, placeName: '대전', startDate: '2024-05-31', endDate: '2024-06-02' },
        { placeCode: 1, placeName: '대전', startDate: '2024-06-06', endDate: '2024-06-07' },
        { placeCode: 2, placeName: '성남', startDate: '2024-06-14', endDate: '2024-06-16' },
        { placeCode: 2, placeName: '성남', startDate: '2024-06-14', endDate: '2024-06-16' },
        { placeCode: 1, placeName: '대전', startDate: '2024-06-21', endDate: '2024-06-24' },
        { placeCode: 3, placeName: '홍콩', startDate: '2024-06-30', endDate: '2024-07-02' },
        { placeCode: 4, placeName: '수원', startDate: '2024-07-02', endDate: '2024-07-02' },
        { placeCode: 4, placeName: '수원', startDate: '2024-07-04', endDate: '2024-07-04' },
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
        <div className="content no-select">
            <div className="d-day-title no-select">
                <img
                    className="person-img no-select"
                    src="/assets/images/IMG_1747.PNG"

                />
                <div className="d-day-content no-select">
                    <div className="d-day-text">뀽<GoHeartFill className="heart" />콩</div>
                    <div className="d-day-text">우리 만난지</div>
                    <div className="d-day-text">D+{dDay}</div>
                </div>
                <img
                    className="person-img no-select"
                    src="/assets/images/IMG_8314.jpeg"
                />
            </div>
            <div id="plans" className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 우리의 일정
                </div>
                <Calendar
                    className="calendar no-select"
                    calendarType="gregory"
                    formatDay={formatDay}
                    onClickDay={clickCalendar}
                />
                {selectedDateList.map((item, idx) => (
                    <div className="normal-content no-select" key={idx}>
                        <span className={`place-name ${item.placeCode === 1 ? 'main-city-1' : 'main-city-2'}`}>{item.placeName}</span>
                        <span>{item.startDate} ~ {item.endDate}</span>
                    </div>
                ))}
            </div>
            <div className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 공지
                </div>
                <div className="normal-content no-select">
                    <ul>
                        <li>뀽콩 헬스 주간(24.07.02 ~ 24.07.07)</li>
                    </ul>
                </div>
            </div>
            <div id="foodMenus" className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 우리의 금주 식단
                </div>
                <div className="normal-content no-select">
                    <ul>
                        <li>회</li>
                        <li>딤섬</li>
                        <li>토마토라면</li>
                    </ul>
                </div>
            </div>
            <div id="buckets" className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 우리의 버킷리스트
                </div>
                <div className="normal-content no-select">
                    <div className="check-lists no-select">
                        <div><MdOutlineCheckBox /> 일본 온천여행 가기</div>
                        <div><MdOutlineCheckBoxOutlineBlank /> 쟈가아리고 만들어먹기</div>
                        <div><MdOutlineCheckBoxOutlineBlank /> 가마치 통닭 바깥에서 치킨이랑 술마시기</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
