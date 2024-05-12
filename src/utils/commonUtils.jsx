// 날짜 간의 빼기 연산
export function subtractDate(newDate, oldDate) {
    let diff = Math.abs(newDate.getTime() - oldDate.getTime());
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return diff
}