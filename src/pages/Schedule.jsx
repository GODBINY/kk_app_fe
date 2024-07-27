import '../css/Home.scss'
import Calendar from 'react-calendar';
import '../css/Calendar.scss'

const Home = () => {

    let datingDayList = [
        { placeCode: 1, placeName: '대전', startDate: '2024-05-14', endDate: '2024-05-16' },
        { placeCode: 1, placeName: '대전', startDate: '2024-05-17', endDate: '2024-05-19' },
        { placeCode: 2, placeName: '성남', startDate: '2024-05-24', endDate: '2024-05-26' },
        { placeCode: 1, placeName: '대전', startDate: '2024-05-31', endDate: '2024-06-02' },
        { placeCode: 1, placeName: '대전', startDate: '2024-06-06', endDate: '2024-06-07' },
        { placeCode: 2, placeName: '성남', startDate: '2024-06-14', endDate: '2024-06-16' },
        { placeCode: 2, placeName: '성남', startDate: '2024-06-14', endDate: '2024-06-16' },
        { placeCode: 1, placeName: '대전', startDate: '2024-06-21', endDate: '2024-06-24' },
        { placeCode: 3, placeName: '홍콩', startDate: '2024-06-30', endDate: '2024-07-02' },
        { placeCode: 4, placeName: '수원', startDate: '2024-07-02', endDate: '2024-07-02' },
        { placeCode: 4, placeName: '수원', startDate: '2024-07-04', endDate: '2024-07-04' },
        { placeCode: 4, placeName: '수원', startDate: '2024-07-06', endDate: '2024-07-06' },
        { placeCode: 1, placeName: '대전', startDate: '2024-07-07', endDate: '2024-07-08' },
        { placeCode: 2, placeName: '성남', startDate: '2024-07-12', endDate: '2024-07-14' },
        { placeCode: 1, placeName: '대전', startDate: '2024-07-19', endDate: '2024-07-21' },
        { placeCode: 2, placeName: '성남', startDate: '2024-07-26', endDate: '2024-07-28' },
    ];

    const formatDay = (locale, date) => date.getDate();

    return (
        <div>
            <div className="content no-select">
                <div id="plans" className="no-select">
                    <Calendar
                        className="calendar no-select"
                        calendarType="gregory"
                        formatDay={formatDay}
                    />
                </div>
            </div>
            <div>
                {datingDayList.map((item, idx) => (
                    <div key={idx}>
                        <span className={`place-name ${item.placeCode === 1 ? 'main-city-1' : 'main-city-2'}`}>{item.placeName}</span>
                        <span>{item.startDate} ~ {item.endDate}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
