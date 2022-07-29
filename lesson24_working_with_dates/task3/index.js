export const getDiff = (startDate, endDate) => {
    function dhm(ms) {
        const days = Math.floor(ms / (24 * 60 * 60 * 1000));
        const daysms = ms % (24 * 60 * 60 * 1000);
        const hours = Math.floor(daysms / (60 * 60 * 1000));
        const hoursms = ms % (60 * 60 * 1000);
        const minutes = Math.floor(hoursms / (60 * 1000));
        const minutesms = ms % (60 * 1000);
        const sec = Math.floor(minutesms / 1000);
        return days + "d " + hours + "h " + minutes + "m " + sec + "s";
    }
    let result = 0
    if (startDate >= endDate) {
        result = (startDate - endDate)
    }
    if (startDate <= endDate) {
        result = (endDate - startDate)
    }

    return dhm(result)
}

//  console.log(getDiff(new Date(2022, 0, 1, 23, 40, 30), new Date(2022, 0, 1, 23, 40, 35)))