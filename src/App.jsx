import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './css/App.scss';
import { GoHeartFill } from "react-icons/go";
import { DiAptana } from "react-icons/di";
import Home from "./components/Home.jsx";
import Days from "./components/Days.jsx";
import Schedule from "./components/Home.jsx";
import Buckets from "./components/Home.jsx";
import FreeBoard from "./components/Home.jsx";

const App = () => {
    const [isShowNavbar, setIsShowNavbar] = useState(false);

    const checkedHandler = () => {
        setIsShowNavbar(!isShowNavbar);
    };

    return (
        <Router>
            <div className="root-wrap">
                <nav className="gnbMenu" style={{ zIndex: isShowNavbar ? 1 : 0 }}>
                    <input type="checkbox" id="hamburger1" checked={isShowNavbar} onChange={checkedHandler} />
                    <label htmlFor="hamburger1"> </label>
                    <ul className="nav-links">
                        <li><Link to="/"><GoHeartFill className="heart list" />  홈</Link></li>
                        <li><Link to="/Days"><GoHeartFill className="heart list" />  우리 만난지..</Link></li>
                        <li><Link to="/Schedule"><GoHeartFill className="heart list" />  우리의 일정</Link></li>
                        <li><Link to="/Buckets"><GoHeartFill className="heart list" />  우리의 버킷리스트</Link></li>
                        <li><Link to="/FreeBoard"><GoHeartFill className="heart list" />  우리의 금주 식단</Link></li>
                    </ul>
                    <DiAptana className="setting-icon" size={35} />
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Days' element={<Days />} />
                    <Route path='/Schedule' element={<Schedule />} />
                    <Route path='/Buckets' element={<Buckets />} />
                    <Route path='/FreeBoard' element={<FreeBoard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
