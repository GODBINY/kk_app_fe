import React from 'react';
import './css/App.scss';
import { GoHeartFill } from "react-icons/go";
import { DiAptana } from "react-icons/di";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Days from "./components/Days.jsx";
import Schedule from "./components/Home.jsx";
import Buckets from "./components/Home.jsx";
import FreeBoard from "./components/Home.jsx";

function App() {
    // const [menuChecked, setMenuChecked] = React.useState('false');
    // const changedMenuHandler = (e) => {
    //     console.log(e.target.value)
    //     setMenuChecked(!e.target.value)
    // }

    return (
            <div className="root-wrap">
                <nav>
                    <input type="checkbox" id="hamburger1" />
                    <label htmlFor="hamburger1"> </label>
                    <ul className="nav-links">
                        <li><a href="/"><GoHeartFill className="heart list" />  홈</a></li>
                        <li><a href="/Days"><GoHeartFill className="heart list" />  우리 만난지..</a></li>
                        <li><a href="/Schedule"><GoHeartFill className="heart list" />  우리의 일정</a></li>
                        <li><a href="/Buckets"><GoHeartFill className="heart list" />  우리의 버킷리스트</a></li>
                        <li><a href="/FreeBoard"><GoHeartFill className="heart list" />  우리의 금주 식단</a></li>
                    </ul>
                    <DiAptana className="setting-icon" size={35} />
                </nav>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Days' element={<Days />} />
                        <Route path='/Schedule' element={<Schedule />} />
                        <Route path='/Buckets' element={<Buckets />} />
                        <Route path='/FreeBoard' element={<FreeBoard />} />
                    </Routes>
                </BrowserRouter>
            </div>

    );
}

export default App;
