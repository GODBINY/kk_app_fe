import '../css/Home.scss'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'
import '../css/Schedule.scss'
import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const Schedule = () => {
    const [datingDayList, setDatingDayList] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await apiClient.get('/schedules');
                setDatingDayList(response.data);
            } catch (error) {
                console.error('Error fetching schedules:', error);
            }
        };

        fetchSchedules();
    }, []);

    const formatDay = (locale, date) => date.getDate();

    return (
        <div>
            <div className="content no-select">
                <div id="plans" className="no-select">
                    <Calendar
                        className="calendar no-select"
                        calendarType="gregory"
                        formatDay={formatDay}
                    />
                </div>
            </div>
            <div className="dating-day-list">
                {datingDayList.map((item, idx) => (
                    <div key={item.id} className="dating-day-cont">
                        <span className={`place-name main-city-${item.placeCode}`}>{item.placeName}</span>
                        <span>{new Date(item.startDate).toLocaleDateString()} ~ {new Date(item.endDate).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;