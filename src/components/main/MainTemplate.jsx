import './MainTemplate.scss';
import { Calendar } from 'antd-mobile';
import { GoHeartFill } from "react-icons/go";
import { DiAptana } from "react-icons/di";

const MainTemplate = () => {
    return (
        <div className="main-template">
            <div className="content">
                <nav>
                    <input type="checkbox" id="hamburger1"/>
                    <label htmlFor="hamburger1"></label>

                    <ul className="nav-links">
                        <li><a href="#"><GoHeartFill className="list-of-heart"/>  우리 만난지..</a></li>
                        <li><a href="#"><GoHeartFill className="list-of-heart"/>  우리의 일정</a></li>
                        <li><a href="#"><GoHeartFill className="list-of-heart"/>  우리의 버킷리스트</a></li>
                        <li><a href="#"><GoHeartFill className="list-of-heart"/>  우리의 금주 식단</a></li>
                    </ul>
                    <DiAptana className="setting-icon" size={35}/>
                </nav>
                <div className="d-day-title">
                    <img
                        className="person-img"
                        src="./src/static/image/IMG_6725.JPG"
                    />
                    <div className="d-day-content">
                        <div>뀽<GoHeartFill className="list-of-heart"/>콩</div>
                        <div>우리 만난지</div>
                        <div>D+502</div>
                    </div>
                    <img
                        className="person-img"
                        src="./src/static/image/IMG_8314.jpeg"
                    />
                </div>
                <div id="plans">
                    <div className="app-title">
                        <GoHeartFill className="list-of-heart"/> 우리의 일정
                    </div>
                    <Calendar className="default-background calendar"/>
                </div>
                <div id="buckets">
                    <div className="app-title">
                        <GoHeartFill className="list-of-heart"/> 우리의 버킷리스트
                    </div>
                    <div className="normal-content">
                        <ul>
                            <li>눈오는 날 가로등 아래에서 뽀뽀하기</li>
                            <li>새해맞이 같이하기</li>
                        </ul>
                    </div>
                </div>
                <div id="foodMenus">
                    <div className="app-title">
                        <GoHeartFill className="list-of-heart"/> 우리의 금주 식단
                    </div>
                    <div className="normal-content">
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