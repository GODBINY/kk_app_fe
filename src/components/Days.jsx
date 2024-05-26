import '../css/Days.scss'
import { GoHeartFill } from "react-icons/go";
import {calculateDday} from '../utils/caculateDday.jsx'

const Days = () => {
    let dDay = calculateDday();
    const title = ['500', '400', '300']
    return (
        <div className="days-content">
            <div className="days-main-area">
                <div>뀽이랑 <GoHeartFill />콩이랑 만난지 {dDay}일이 되었어요!</div>
                <div>우리뀽이 내가 인스타 글 남겨두었으니 꼭 봐요 힝</div>
                <div>너무 많이많이 사랑하구</div>
                <div>얼결해서 부부의날 실제로 꼭 챙기자?</div>
            </div>
            <div className="days-sub-area">
                <div className="days-sub-content">
                    <h2><GoHeartFill /> D+{dDay} <GoHeartFill /></h2>
                </div>
                {title.map((item,idx)=> {
                    return (
                        <div className="days-sub-content" key={idx}>
                            <h2><GoHeartFill /> D+{item} <GoHeartFill /></h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default Days;