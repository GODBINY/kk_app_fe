import './MainTemplate.scss';
import { Calendar } from 'antd-mobile';
import { GoHeartFill } from "react-icons/go";

const MainTemplate = () => {
    return (
        <div className="MainTemplate">
            <div className="app-title">
                <GoHeartFill /> 우리의 일정 <GoHeartFill />
            </div>
            <Calendar />
        </div>
    );
};

export default MainTemplate;