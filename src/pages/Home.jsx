import '../css/Home.scss'
import { useState, useEffect } from 'react';
import { GoHeartFill } from "react-icons/go";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { calculatedDday } from '../utils/caculateDday.jsx'
import { changeToMillisecond, stringToDate } from '../utils/commonUtils.jsx'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'
import apiClient from '../api/apiClient';
import bucketList from '../data/bucketList.json';

const Home = () => {
  let dDay = calculatedDday();
  const [selectedDateList, setSelectedDateList] = useState([]);
  const [datingDayList, setDatingDayList] = useState([]);
  // const [bucketLists, setBucketLists] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await apiClient.get('/schedules');
        setDatingDayList(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    const fetchBucketLists = async () => {
      try {
        const response = await apiClient.get('/bucket-lists');
        setBucketLists(response.data);
      } catch (error) {
        console.error('Error fetching bucket lists:', error);
      }
    };

    fetchSchedules();
    fetchBucketLists();

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    clickCalendar(today);
  }, []);

  const formatDay = (locale, date) => date.getDate();

  const clickCalendar = (value) => {
    const filteredDates = datingDayList.filter((item) => {
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      return (
        changeToMillisecond(startDate) <= changeToMillisecond(value) &&
        changeToMillisecond(endDate) >= changeToMillisecond(value)
      );
    });
    setSelectedDateList(filteredDates);
  };

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
        {/*{selectedDateList.length > 0 ? (*/}
        {/*  selectedDateList.map((item) => (*/}
        {/*    <div className="normal-content no-select" key={item.id}>*/}
        {/*      <span className={`place-name main-city-${item.placeCode}`}>{item.placeName}</span>*/}
        {/*      <span>{new Date(item.startDate).toLocaleDateString()} ~ {new Date(item.endDate).toLocaleDateString()}</span>*/}
        {/*    </div>*/}
        {/*  ))*/}
        {/*) : (*/}
        {/*  <div className="normal-content no-select">*/}
        {/*    /!*<span className={`place-name main-city-3`}>뀽콩 못보는날</span>*!/*/}
        {/*    /!*<span>힝 얼른 보자?</span>*!/*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      <div className="no-select">
        <div className="app-title no-select">
          <GoHeartFill className="heart list" /> 공지
        </div>
        <div className="normal-content no-select">
          <ul>
            <li>(축)뀽이랑 콩이의 1000일!!!(하)</li>
          </ul>
        </div>
      </div>
      <div id="foodMenus" className="no-select">
        <div className="app-title no-select">
          <GoHeartFill className="heart list" /> 우리의 금주 식단
        </div>
        <div className="normal-content no-select">
          <ul>
            <li>프라이랩</li>
            <li>순두부장</li>
          </ul>
        </div>
      </div>
      <div id="buckets" className="no-select">
        <div className="app-title no-select">
          <GoHeartFill className="heart list" /> 우리의 버킷리스트
        </div>
        <div className="normal-content no-select">
          <div className="check-lists no-select">
            {bucketList.slice(0,4).map((item) => (
              <div key={item.id}>
                {item.isCompleted ? (
                  <MdOutlineCheckBox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
                {item.content}
              </div>
            ))}
            <span style={{color: 'blue'}}>더보기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
