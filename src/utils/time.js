export function time2Obj(time, symbol = '/') {
    time = time ? new Date(time) : new Date();
    let obj = new Object();
    obj.year = time.getFullYear();
    obj.month = (time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1).toString();
    obj.day = time.getDate() >= 10 ? time.getDate() : '0' + time.getDate().toString();
    obj.hour = time.getHours() >= 10 ? time.getHours() : '0' + time.getHours().toString();
    obj.minute = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes().toString();
    obj.second = time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds().toString();
    obj.symbolStr = obj.year + symbol + obj.month + symbol + obj.day;
    obj.str = obj.symbolStr + ' ' + obj.hour + ':' + obj.minute + ':' + obj.second;
    obj.dateStr = obj.year.toString() + obj.month.toString();
    obj.dateStr2 = obj.dateStr + obj.day.toString();
    obj.dateStr4 = obj.hour.toString() + obj.minute.toString() + obj.second.toString();
    obj.dateStr3 = obj.dateStr2 + obj.dateStr4;
    obj.timeStr = obj.dateStr + obj.hour + obj.minute + obj.second;
    return obj;
}

export function formatTime(str) {
    return str.slice(0, 4) + '/' + str.slice(4, 6) + '/' + str.slice(6, 8) + ' ' + str.slice(8, 10) + ':' + str.slice(10, 12) + ':' + str.slice(12, 14)
}

export function getOverTime(str1, str2) {
    let times = Date.parse(new Date(formatTime(str1))) - Date.parse(new Date(formatTime(str2)))
    return {
        year: Math.floor(times / 31536000000),
        month: Math.floor(times / 2592000000 % 12),
        day: Math.floor(times % 86400000)
    }
}

export function formatTimeObj(str) {
    return {
        year: str.slice(0, 4),
        month: str.slice(4, 6),
        day:  str.slice(6, 8),
        hour: str.slice(8, 10),
        minute: str.slice(10, 12),
        second: str.slice(12, 14),
        symbolStr: str.slice(0, 4) + '/' + str.slice(4, 6) + '/' + str.slice(6, 8) + ' ' + str.slice(8, 10) + ':' + str.slice(10, 12) + ':' + str.slice(12, 14)
    }
}
