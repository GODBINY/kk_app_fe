import React, { useState, useEffect } from 'react';
import '../css/Days.scss'
import { GoHeartFill } from "react-icons/go";
import { calculatedDday } from '../utils/caculateDday.jsx'
import apiClient from '../api/apiClient';

const Days = () => {
    let dDay = calculatedDday();
    const [dDays, setDDays] = useState([]);
    const today = new Date().toLocaleDateString();

    useEffect(() => {
        const fetchDDays = async () => {
            try {
                const response = await apiClient.get('/ddays');
                setDDays(response.data);
            } catch (error) {
                console.error('Error fetching ddays:', error);
            }
        };

        fetchDDays();
    }, []);

    // 각 디데이를 더한 날짜를 계산하는 함수 (기존 로직 유지)
    const calculateFutureDate = (itemDate) => {
        const date = new Date(itemDate);
        return date.toLocaleDateString();
    };

    return (
        <div className="days-content">
            <div className="days-main-area">
                <img
                    className="days-background-img"
                    src="/assets/images/뀽콩_배경사진.png"
                />
                <div className="overlay">
                    <div className="next-d-day">
                        {/* TODO: 다음 기념일 정보 백엔드에서 가져오기 */}
                        <div>600일까지 76일 남음</div>
                        <div>2024.08.10(토)</div>
                    </div>
                </div>
            </div>
            <div className="days-sub-area">
                <div className="days-sub-content" style={{ backgroundColor: getRandomPastelColor() }}>
                    <GoHeartFill className="heart"/>
                    <div className="d-day-area">
                        <div>D+{dDay}</div>
                        <div>{today}</div>
                    </div>
                    <GoHeartFill className="heart"/>
                </div>
                {dDays.map((item) => {
                    return (
                        <div className="days-sub-content" style={{ backgroundColor: getRandomPastelColor() }} key={item.id}>
                            <GoHeartFill className="heart"/>
                            <div className="d-day-area">
                                <div>{item.title}</div>
                                <div>{calculateFutureDate(item.date)}</div>
                            </div>
                            <GoHeartFill className="heart"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

// 랜덤 파스텔 색상을 생성하는 함수
const getRandomPastelColor = () => {
    const r = Math.floor((Math.random() * 25) + 230);
    const g = Math.floor((Math.random() * 25) + 230);
    const b = Math.floor((Math.random() * 25) + 230);
    return `rgb(${r},${g},${b})`;
};

export default Days;
