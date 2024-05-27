import {subtractDate} from './commonUtils.jsx';

// 사귄 날짜를 계산한다
export const calculateDday = () => {
    const today = new Date();
    const startLoveDate = new Date('2022-12-20');

    today.setHours(0, 0, 0, 0);
    startLoveDate.setHours(0, 0, 0, 0);

    return subtractDate(today,startLoveDate) + 1
}

export default calculateDday();