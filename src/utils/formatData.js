
// 编写位置记录 数据
export function formatRecord(list) {
  let dateList = [];
  let arr = [];
  for (let i = 0, len = list.length; i < len; i++ ) {
    let str = list[i].posreportTime.slice(0, 8)
    if (!dateList.includes(str)) {
      dateList.push(str)
    }
  }
  for (let i = 0, len = dateList.length; i < len; i++) {
    let obj = new Object();
    obj.month = dateList[i].slice(4, 6)
    obj.day = dateList[i].slice(6, 8)
    obj.list = []
    for (let x = 0, lens = list.length; x < lens; x++) {
      if (dateList[i] === list[x].posreportTime.slice(0, 8)) {
        obj.list.push({
          time: list[x].posreportTime.slice(8, 10) + ':' + list[x].posreportTime.slice(10, 12),
          location: list[x].posName,
          address: list[x].detailAddr,
          lon: list[x].longitude,
          lat: list[x].latitude,
          isLcorder: list[x].isLcorder
        })
      }
    }
    arr.push(obj)
  }
  console.log(arr)
  return arr
}
