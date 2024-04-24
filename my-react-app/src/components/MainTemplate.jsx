import './MainTemplate.scss';
import { Calendar } from 'antd-mobile';

const MainTemplate = () => {
    return (
        <div className="MainTemplate">
            <div className="app-title">일정관리</div>
            <Calendar />
        </div>
    );
};

export default MainTemplate;