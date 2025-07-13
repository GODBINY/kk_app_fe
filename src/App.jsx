import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './css/App.scss';
import { GoHeartFill } from "react-icons/go";
import { DiAptana } from "react-icons/di";
import Home from "./pages/Home.jsx";
import Days from "./pages/Days.jsx";
import Schedule from "./pages/Schedule.jsx";
import Buckets from "./pages/Buckets.jsx";
import FreeBoard from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx"; // SignUp 컴포넌트 임포트

const App = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleOutsideClick = () => {
        if (isChecked) {
            setIsChecked(false);
        }
    };

    return (
        <Router>
            <div className="root-wrap">
                <nav className="gnbMenu">
                    <input
                        type="checkbox"
                        id="hamburger1"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="hamburger1"> </label>
                    <ul className="nav-links" onClick={handleOutsideClick}>
                        <li><Link to="/"><GoHeartFill className="heart list" />  홈</Link></li>
                        <li><Link to="/Days"><GoHeartFill className="heart list" />  우리 만난지..</Link></li>
                        <li><Link to="/Schedule"><GoHeartFill className="heart list" />  우리의 일정</Link></li>
                        <li><Link to="/Buckets"><GoHeartFill className="heart list" />  우리의 버킷리스트</Link></li>
                        <li><Link to="/FreeBoard"><GoHeartFill className="heart list" />  우리의 금주 식단</Link></li>
                        <li><Link to="/Album"><GoHeartFill className="heart list" />  우리의 앨범</Link></li>
                        <li><Link to="/signup"><GoHeartFill className="heart list" />  회원가입</Link></li> {/* 회원가입 링크 추가 */}
                    </ul>
                    <DiAptana className="setting-icon" size={35} />
                </nav>
                <div className="mainContents" onClick={handleOutsideClick}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Days' element={<Days />} />
                        <Route path='/Schedule' element={<Schedule />} />
                        <Route path='/Buckets' element={<Buckets />} />
                        <Route path='/FreeBoard' element={<FreeBoard />} />
                        <Route path='/signup' element={<SignUp />} /> {/* 회원가입 라우트 추가 */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;