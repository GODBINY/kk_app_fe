import './MainTemplate.scss';
import { Calendar } from 'antd-mobile';
import { GoHeartFill } from "react-icons/go";

const MainTemplate = () => {
    return (
        <div className="main-template">
            <div className="content">
                <nav>
                    <input type="checkbox" id="hamburger1"/>
                    <label htmlFor="hamburger1"></label>

                    <ul className="nav-links">
                        <li><a href="#"><GoHeartFill /> 우리 만난지..</a></li>
                        <li><a href="#"><GoHeartFill /> 우리의 일정</a></li>
                        <li><a href="#"><GoHeartFill /> 우리의 버킷리스트</a></li>
                        <li><a href="#"><GoHeartFill /> 우리의 금주 식단</a></li>
                    </ul>
                </nav>
                <div className="d-day-title">
                    <img
                        className="person-img"
                        src="https://loremflickr.com/320/240?lock=1"
                    />
                    <div className="d-day-content">
                        <div>뀽<GoHeartFill />콩</div>
                        <div>우리 만난지</div>
                        <div>D+502</div>
                    </div>
                    <img
                        className="person-img"
                        src="https://loremflickr.com/320/240?lock=1"
                    />
                </div>
                <div id="plans">
                    <div className="app-title">
                        <GoHeartFill /> 우리의 일정 <GoHeartFill />
                    </div>
                    <Calendar />
                </div>
                <div id="buckets">
                    <div className="app-title">
                        <GoHeartFill /> 우리의 버킷리스트 <GoHeartFill />
                    </div>
                    <div className="d-day-content">
                        <ul>
                            <li>눈오는 날 가로등 아래에서 뽀뽀하기</li>
                            <li>새해맞이 같이하기</li>
                        </ul>
                    </div>
                </div>
                <div id="foodMenus">
                    <div className="app-title">
                        <GoHeartFill /> 우리의 금주 식단 <GoHeartFill />
                    </div>
                    <div className="d-day-content">
                        <ul>
                            <li>점보 오모리 김치찌개 라면</li>
                            <li>두릅무침</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTemplate;