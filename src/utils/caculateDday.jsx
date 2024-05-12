import {subtractDate} from './commonUtils.jsx';

// 사귄 날짜를 계산한다
export const calculateDday = () => {
    const today = new Date();
    const startLoveDate = new Date('2022-12-20');
    return subtractDate(today,startLoveDate) + 1
}

export default calculateDday();