function dhm(t) {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor((t - d * cd) / ch),
        m = Math.round((t - d * cd - h * ch) / 60000),
        s = Math.round((t - d * cd - h * ch) / 600000)
    pad = function(n) { return n < 10 ? '0' + n : n; };
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    return [d + 'd ', , pad(h) + 'h ', pad(m) + 'm ', pad(s) + 's '].join('');
}


export const getDiff = (startDate, endDate) => {
    let result = 0
    if (startDate >= endDate) {
        result = (startDate - endDate)
    }
    if (startDate <= endDate) {
        result = (endDate - startDate)
    }

    return dhm(result)
}