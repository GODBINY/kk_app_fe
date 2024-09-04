import '../css/Home.scss'
import { useState, useEffect } from 'react';
import { GoHeartFill } from "react-icons/go";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { calculatedDday } from '../utils/caculateDday.jsx'
import { changeToMillisecond, stringToDate } from '../utils/commonUtils.jsx'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'

const Home = () => {
    let dDay = calculatedDday();
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
        { placeCode: 4, placeName: '홍콩', startDate: '2024-06-30', endDate: '2024-07-02' },
        { placeCode: 3, placeName: '수원', startDate: '2024-07-02', endDate: '2024-07-02' },
        { placeCode: 3, placeName: '수원', startDate: '2024-07-04', endDate: '2024-07-04' },
        { placeCode: 3, placeName: '수원', startDate: '2024-07-06', endDate: '2024-07-06' },
        { placeCode: 1, placeName: '대전', startDate: '2024-07-07', endDate: '2024-07-08' },
        { placeCode: 2, placeName: '성남', startDate: '2024-07-12', endDate: '2024-07-14' },
        { placeCode: 1, placeName: '대전', startDate: '2024-07-19', endDate: '2024-07-21' },
        { placeCode: 2, placeName: '성남', startDate: '2024-07-26', endDate: '2024-07-28' },
        { placeCode: 1, placeName: '대전', startDate: '2024-07-29', endDate: '2024-07-30' },
        { placeCode: 1, placeName: '대전', startDate: '2024-08-02', endDate: '2024-08-03' },
        { placeCode: 1, placeName: '대전', startDate: '2024-08-09', endDate: '2024-08-10' },
        { placeCode: 4, placeName: '부산', startDate: '2024-08-10', endDate: '2024-08-11' },
        { placeCode: 1, placeName: '대전', startDate: '2024-08-11', endDate: '2024-08-11' },
        { placeCode: 1, placeName: '대전', startDate: '2024-08-14', endDate: '2024-08-18' },
        { placeCode: 2, placeName: '성남', startDate: '2024-08-23', endDate: '2024-08-25' },
    ];

    const formatDay = (locale, date) => date.getDate();

    const clickCalendar = (value) => {
        const filteredDates = datingDayList.filter((item) => {
            return (
                changeToMillisecond(stringToDate(item.startDate)) <= changeToMillisecond(value) &&
                changeToMillisecond(stringToDate(item.endDate)) >= changeToMillisecond(value)
            );
        });
        setSelectedDateList(filteredDates);
    };

    useEffect(() => {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        clickCalendar(today);
    }, []);

    return (
        <div className="content no-select">
            <div className="d-day-title no-select">
                <img
                    className="person-img no-select"
                    src="/assets/images/뀽_프로필_2.png"
                />
                <div className="d-day-content no-select">
                    <div className="d-day-text">뀽<GoHeartFill className="heart" />콩</div>
                    <div className="d-day-text">우리 만난지</div>
                    <div className="d-day-text">D+{dDay}</div>
                </div>
                <img
                    className="person-img no-select"
                    src="/assets/images/콩_프로필.png"
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
                {selectedDateList.length > 0 ? (
                    selectedDateList.map((item, idx) => (
                        <div className="normal-content no-select" key={idx}>
                            <span className={`place-name main-city-${item.placeCode}`}>{item.placeName}</span>
                            <span>{item.startDate} ~ {item.endDate}</span>
                        </div>
                    ))
                ) : (
                    <div className="normal-content no-select">
                        <span className={`place-name main-city-3`}>뀽콩 못보는날</span>
                        <span>힝 얼른 보자?</span>
                    </div>
                )}
            </div>
            <div className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 공지
                </div>
                <div className="normal-content no-select">
                    <ul>
                        <li>(축)금토일월 뀽이랑 같이 있을 수 있는 주(하)</li>
                    </ul>
                </div>
            </div>
            <div id="foodMenus" className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 우리의 금주 식단
                </div>
                <div className="normal-content no-select">
                    <ul>
                        <li>미정... </li>
                    </ul>
                </div>
            </div>
            <div id="buckets" className="no-select">
                <div className="app-title no-select">
                    <GoHeartFill className="heart list" /> 우리의 버킷리스트
                </div>
                <div className="normal-content no-select">
                    <div className="check-lists no-select">
                        <div><MdOutlineCheckBoxOutlineBlank /> 일본 온천여행 가기</div>
                        <div><MdOutlineCheckBoxOutlineBlank /> 쟈가아리고 만들어먹기</div>
                        <div><MdOutlineCheckBox /> 가마치 통닭 바깥에서 치킨이랑 술마시기</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;