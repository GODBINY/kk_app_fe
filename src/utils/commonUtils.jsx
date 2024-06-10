// 날짜 간의 빼기 연산
export function subtractDate(newDate, oldDate) {
    let diff = Math.abs(newDate.getTime() - oldDate.getTime());
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return diff
}

export function stringToDate(stringValue){
    let dateValue = new Date();
    dateValue.setFullYear(stringValue.substring(0,4));
    dateValue.setMonth(stringValue.substring(5,7)-1);
    dateValue.setDate(stringValue.substring(8,10));
    dateValue.setHours(0);
    dateValue.setMinutes(0);
    dateValue.setSeconds(0);
    dateValue.setMilliseconds(0)
    return dateValue;
}

export function changeTomillisecond(dateValue) {
    return dateValue.valueOf();
}
