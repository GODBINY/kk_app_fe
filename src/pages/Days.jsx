import '../css/Days.scss'
import { GoHeartFill } from "react-icons/go";
import { calculatedDday } from '../utils/caculateDday.jsx'

const START_DATE_STR = '2022-12-20';

const Days = () => {
  const dDay = calculatedDday(); // 오늘까지 지난 일수 (D+N의 N)
  const today = new Date();
  const todayStr = toKoreanDateStr(today);

  // 기준일 + n일 후 날짜
  const dateFromStartPlus = (n) => {
    const start = new Date(START_DATE_STR);
    const future = new Date(start.getTime());
    future.setDate(start.getDate() + Number(n));
    return future;
  };

  // ===== 주년 리스트(과거 주년만) =====
  const pastAnniversaries = (() => {
    const start = new Date(START_DATE_STR);
    const list = [];
    // 올해/작년/재작년… 역순으로 과거 주년만 채워 넣기
    let y = today.getFullYear() - start.getFullYear();
    for (; y >= 1; y--) {
      const annivDate = new Date(start);
      annivDate.setFullYear(start.getFullYear() + y);
      if (annivDate > today) continue; // 미래 주년 제외 (목록은 과거만)
      const days = diffDays(annivDate, start); // starting day → anniv까지 며칠
      if (days === dDay) continue; // 오늘이 정확히 주년인 경우, 리스트에서는 제외
      list.push({
        label: `${y}주년`,
        days,
        dateStr: toKoreanDateStr(annivDate),
      });
    }
    return list;
  })();

  // ===== 100일 단위 리스트(과거만) =====
  const pastHundreds = (() => {
    const maxHund = dDay - (dDay % 100); // 현재 시점 가장 가까운 과거 100의 배수
    const arr = [];
    for (let n = maxHund; n >= 0; n -= 100) {
      if (n === dDay) continue; // 오늘이 정확히 100의 배수라면 리스트에서 제외
      arr.push({
        label: n === 0 ? '우리 사귀기 시작한 날' : `D+${n}`,
        days: n,
        dateStr: toKoreanDateStr(dateFromStartPlus(n)),
      });
    }
    return arr;
  })();

  // ===== 중복 제거(주년과 100일이 같은 날수일 때 한 번만) =====
  const seen = new Set();
  const mergedPast = [];
  // (과거 100일 → 과거 주년) 순서로 넣되, days 중복 방지
  for (const it of pastHundreds) {
    if (!seen.has(it.days)) {
      seen.add(it.days);
      mergedPast.push(it);
    }
  }
  for (const it of pastAnniversaries) {
    if (!seen.has(it.days)) {
      seen.add(it.days);
      mergedPast.push(it);
    }
  }
  // 최신순(가까웠던 기념일이 위로) 정렬
  mergedPast.sort((a, b) => b.days - a.days);

  // ===== 다음(미래) 기념일: 100의 다음 배수 vs 다음 주년 중 가까운 것 =====
  const nextHundDays = (Math.floor(dDay / 100) + 1) * 100; // 다음 100의 배수
  const nextHundDiff = nextHundDays - dDay;
  const nextHundDate = dateFromStartPlus(nextHundDays);

  const nextAnnivInfo = getNextAnniversary(today);
  // 후보 2개 중 더 가까운 것을 선택
  const nextCandidates = [
    {
      type: 'hund',
      label: `${nextHundDays}일까지`,
      left: nextHundDiff,
      date: nextHundDate,
      dateStr: toKoreanDateStr(nextHundDate),
    },
    ...(nextAnnivInfo
      ? [{
          type: 'anniv',
          label: `${nextAnnivInfo.year}주년까지`,
          left: nextAnnivInfo.left,
          date: nextAnnivInfo.date,
          dateStr: toKoreanDateStr(nextAnnivInfo.date),
        }]
      : []),
  ].filter(c => c.left > 0); // 오늘과 같으면(=0) 제외, ‘다음’만 보여주려 함

  // 남은 일수 적은 순
  nextCandidates.sort((a, b) => a.left - b.left);
  const nextOne = nextCandidates[0] || null;

  return (
    <div className="days-content">
      <div className="days-main-area">
        <img
          className="days-background-img"
          src="/assets/images/뀽콩_배경사진.png"
          alt="배경"
        />
        <div className="overlay">
          {nextOne ? (
            <div className="next-d-day">
              <div>{nextOne.label} {nextOne.left}일 남음</div>
              <div>{nextOne.dateStr}</div>
            </div>
          ) : (
            <div className="next-d-day">
              <div>예정된 기념일 없음</div>
            </div>
          )}
        </div>
      </div>

      <div className="days-sub-area">
        {/* 오늘 카드 */}
        <div className="days-sub-content" style={{ backgroundColor: getRandomPastelColor() }}>
          <GoHeartFill className="heart" />
          <div className="d-day-area">
            <div>D+{dDay}</div>
            <div>{todayStr}</div>
          </div>
          <GoHeartFill className="heart" />
        </div>

        {/* 과거 기념일 카드들 (100일 & 주년) */}
        {mergedPast.map((it) => (
          <div
            className="days-sub-content"
            style={{ backgroundColor: getRandomPastelColor() }}
            key={`${it.label}-${it.days}`}
          >
            <GoHeartFill className="heart" />
            <div className="d-day-area">
              <div>{it.label}</div>
              <div>{it.dateStr}</div>
            </div>
            <GoHeartFill className="heart" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- utils ---------- */

// YYYY.MM.DD(요일) 포맷 (한국어)
function toKoreanDateStr(date) {
  const yoil = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}(${yoil})`;
}

// 날짜 차이(일) = (a - b)
function diffDays(a, b) {
  const MS = 1000 * 60 * 60 * 24;
  const a0 = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const b0 = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((a0 - b0) / MS);
}

// 다음 주년: 오늘 이후 첫 주년과 남은 일수
function getNextAnniversary(today) {
  const start = new Date(START_DATE_STR);
  // 다음 주년 후보 = 시작일의 연도만 +n 해서 오늘 이후가 되는 첫 날짜
  let year = today.getFullYear() - start.getFullYear();
  let candidate = new Date(start);
  candidate.setFullYear(start.getFullYear() + year);
  if (candidate <= today) {
    year += 1;
    candidate = new Date(start);
    candidate.setFullYear(start.getFullYear() + year);
  }
  // 안전장치: 너무 먼 미래면 null
  if (year <= 0 || year > 120) return null;
  const left = diffDays(candidate, today);
  return { year, date: candidate, left };
}

// 랜덤 파스텔 색
const getRandomPastelColor = () => {
  const r = Math.floor((Math.random() * 25) + 230);
  const g = Math.floor((Math.random() * 25) + 230);
  const b = Math.floor((Math.random() * 25) + 230);
  return `rgb(${r},${g},${b})`;
};

export default Days;