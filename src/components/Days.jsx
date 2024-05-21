import '../css/Days.scss'
import { GoHeartFill } from "react-icons/go";
import {calculateDday} from '../utils/caculateDday.jsx'

const Days = () => {
    let dDay = calculateDday();
    return (
        <div className="days-content">
            <div>뀽이랑 <GoHeartFill />콩이랑 만난지 {dDay}일이 되었어요!</div>
            <div>우리뀽이 너무많이 사랑해</div>
            <div>오늘도 내꺼 해줘서 고맙습니다!</div>
            <div>내일 얼른 보자 히히</div>
        </div>
    );
};


export default Days;