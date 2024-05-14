import React from 'react';
import './css/App.scss';
import {GoHeartFill} from "react-icons/go";
import {DiAptana} from "react-icons/di";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Days from "./components/Days.jsx";
import Schedule from "./components/Home.jsx";
import Buckets from "./components/Home.jsx";
import FreeBoard from "./components/Home.jsx";

class App extends React.Component {

    render() {
        return (
            <div className="main-template">
                <div className="content">
                    <nav>
                        <input type="checkbox" id="hamburger1"/>
                        <label htmlFor="hamburger1"></label>
                        <ul className="nav-links">
                            <li><a href="/"><GoHeartFill className="heart list"/>  홈</a></li>
                            <li><a href="/Days"><GoHeartFill className="heart list"/>  우리 만난지..</a></li>
                            <li><a href="/Schedule"><GoHeartFill className="heart list"/>  우리의 일정</a></li>
                            <li><a href="/Buckets"><GoHeartFill className="heart list"/>  우리의 버킷리스트</a></li>
                            <li><a href="/FreeBoard"><GoHeartFill className="heart list"/>  우리의 금주 식단</a></li>
                        </ul>
                        <DiAptana className="setting-icon" size={35}/>
                    </nav>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                            <Route path='/Days' exact element={<Days />} />
                            <Route path='/Schedule' exact element={<Schedule />} />
                            <Route path='/Buckets' exact element={<Buckets />} />
                            <Route path='/FreeBoard' exact element={<FreeBoard />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
