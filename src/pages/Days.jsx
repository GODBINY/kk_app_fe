import '../css/Days.scss'
import { GoHeartFill } from "react-icons/go";
import {calculatedDday} from '../utils/caculateDday.jsx'

const Days = () => {
    let dDay = calculatedDday();
    // const title = ['500', '400', '300', '200', '100']
    const today = new Date().toLocaleDateString();
    console.log(multipleOf100Days())
    console.log(title())


    // 각 디데이를 더한 날짜를 계산하는 함수
    const calculateFutureDate = (item) => {
        // 기준일인 2022년 12월 20일
        const startDate = new Date('2022-12-20');

        // item일을 더한 날짜 계산
        const futureDate = new Date(startDate.getTime());
        futureDate.setDate(startDate.getDate() + Number(item));

        // 계산된 날짜를 문자열로 반환
        return futureDate.toLocaleDateString();
    };

    return (
        <div className="days-content">
            <div className="days-main-area">
                <img
                    className="days-background-img"
                    src="/assets/images/days_background_img.jpeg"
                />
                <div className="overlay">
                    <div className="next-d-day">
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
                {title().map((item,idx)=> {
                    const pastDate = calculateFutureDate(Number(item));
                    return (
                        <div className="days-sub-content" style={{ backgroundColor: getRandomPastelColor() }} key={idx}>
                            <GoHeartFill className="heart"/>
                            <div className="d-day-area">
                                <div>{item===0? "우리 사귀기 시작한 날" : `D+${item}`}</div>
                                <div>{pastDate}</div>
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

// 100 단위로 떨어지는 디데이를 계산해주는 함수
const multipleOf100Days = () => {
    return calculatedDday() - calculatedDday()%100;
};

// 100 단위로 사귄 날짜 리스트화
const title = () => {
    let titleArray = []
    if (multipleOf100Days()) {
        for(let i=multipleOf100Days(); i>=0; i-=100){
            console.log(i)
            titleArray.push(i)
        }
    }
    return titleArray
}

export default Days;