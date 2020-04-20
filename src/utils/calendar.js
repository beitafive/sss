import {time2Obj} from "./time";

let CalendarData = new Array(100);
let madd = new Array(12);
let numString = "一二三四五六七八九十";
var monString = "正二三四五六七八九十冬腊";
let cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;

function GetBit(m, n) {
  return (m >> n) & 1;
}
function e2c() {
  TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
  let total, m, n, k;
  let isEnd = false;
  let tmp = TheDate.getYear();
  if (tmp < 1900) {
    tmp += 1900;
  }
  total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

  if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
    total++;
  }
  for (m = 0; ; m++) {
    k = (CalendarData[m] < 0xfff) ? 11 : 12;
    for (n = k; n >= 0; n--) {
      if (total <= 29 + GetBit(CalendarData[m], n)) {
        isEnd = true; break;
      }
      total = total - 29 - GetBit(CalendarData[m], n);
    }
    if (isEnd) break;
  }
  cMonth = k - n + 1;
  cDay = total;
  if (k == 12) {
    if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth = 1 - cMonth;
    }
    if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth--;
    }
  }
}

function GetcDateString() {
  let tmp = "";
  // tmp += tgString.charAt((cYear - 4) % 10);
  // tmp += dzString.charAt((cYear - 4) % 12);
  // tmp += "(";
  // tmp += sx.charAt((cYear - 4) % 12);
  // tmp += ")年 ";

  tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三"));
  tmp += numString.charAt((cDay - 1) % 10);
  if (tmp === '初一') {
    tmp = ''
    if (cMonth < 1) {
      tmp += "(闰)";
      tmp += monString.charAt(-cMonth - 1);
    } else {
      tmp += monString.charAt(cMonth - 1);
    }
    tmp += "月";
  }
  return tmp;
}

function GetLunarDay(date) {
  const obj = str2Date(date)
  //solarYear = solarYear<1900?(1900+solarYear):solarYear;
  if (obj.year < 1921 || obj.year > 2020) {
    return "";
  } else {
    obj.month = (parseInt(obj.month) > 0) ? (obj.month - 1) : 11;
    e2c(obj.year, obj.month, obj.day);
    return GetcDateString();
  }
}

export function returnLunarDay (date) {
  return GetLunarDay(date)
}

export function createList ( currentList ) {
  // 生成本月的日期 当前月共 {num} 天
  const num = currentList.length
  let list = [].concat(currentList)
  // 加上 前面日期  86400000
  const nums = new Date(list[0].date).getDay() === 0 ? 7 : new Date(list[0].date).getDay()
  const fristDay = Date.parse(new Date(list[0].date)) // 当前月 第一天
  const lastDay = Date.parse(new Date(list[num-1].date)) // 当前月最后一天
  for (let j = 0; j < nums; j++) {
    let dates = time2Obj(fristDay - 86400000 * j - 1)
    list.unshift({
      name: dates.day * 1,
      date: dates.symbolStr,
      currentDate: dates.dateStr2,
      lunar: returnLunarDay(dates.dateStr2)
    })
  }
  // 加上 后面日期
  const nextNum = 42 - num - nums
  for (let j = 0; j < nextNum; j++) {
    let dates = time2Obj(lastDay + 86400000 * (j + 1))
    list.push({
      name: dates.day * 1,
      date: dates.symbolStr,
      currentDate: dates.dateStr2,
      lunar: returnLunarDay(dates.dateStr2)
    })
  }
  return list
}

export function str2Date(str) {
  let year = str.slice(0,4)
  let month = str.slice(4,6)
  let day = str.slice(6,8)
  return {
    year,
    month,
    day,
    symbolStr: year+'/'+month+'/'+day
  }
}

