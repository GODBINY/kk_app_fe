import './MainTemplate.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoHeartFill } from "react-icons/go";
import { DiAptana } from "react-icons/di";
import Home from "../components/Home.jsx";

const MainTemplate = () => {
    return (
        <div className="main-template">
            <div className="content">
                <nav>
                    <input type="checkbox" id="hamburger1"/>
                    <label htmlFor="hamburger1"></label>
                    <ul className="nav-links">
                        <li><a href="beginning_react/kk_app_fe/src/pages/MainTemplate.jsx#"><GoHeartFill className="heart list"/>  우리 만난지..</a></li>
                        <li><a href="beginning_react/kk_app_fe/src/pages/MainTemplate.jsx#"><GoHeartFill className="heart list"/>  우리의 일정</a></li>
                        <li><a href="beginning_react/kk_app_fe/src/pages/MainTemplate.jsx#"><GoHeartFill className="heart list"/>  우리의 버킷리스트</a></li>
                        <li><a href="beginning_react/kk_app_fe/src/pages/MainTemplate.jsx#"><GoHeartFill className="heart list"/>  우리의 금주 식단</a></li>
                    </ul>
                    <DiAptana className="setting-icon" size={35}/>
                </nav>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/' exact element={<CalendarContents />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};


export default MainTemplate;