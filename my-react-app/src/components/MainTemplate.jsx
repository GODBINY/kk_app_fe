import './MainTemplate.scss';
import { Calendar } from 'antd-mobile';
import { GoHeartFill } from "react-icons/go";

const MainTemplate = () => {
    return (
        <div className="MainTemplate">
            <div className="d-day-title">
                <div className="d-day-content">
                    <img
                        className="person-img"
                         src="https://loremflickr.com/320/240?lock=1"
                    />
                    <div>뀽<GoHeartFill />콩</div>
                    <div>우리 만난지</div>
                    <div>D+502</div>
                    <img
                        className="person-img"
                         src="https://loremflickr.com/320/240?lock=1"
                    />
                </div>
            </div>
            <div id="plans">
                <div className="app-title">
                    <GoHeartFill /> 우리의 일정 <GoHeartFill />
                </div>
            </div>
            <Calendar />
        </div>
    );
};

export default MainTemplate;