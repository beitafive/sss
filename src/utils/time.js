export function time2Obj(time, symbol = '-') {
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
    return obj;
}