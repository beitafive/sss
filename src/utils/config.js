function sortNumber (a, b) {
    return a.posreportTime - b.posreportTime
}

export function sortTime (list) {
    list.sort(sortNumber)
    return list
}
