function getAdults(obj) {
    const result = Object.entries(obj)
        .filter(user => user[1] >= 18)
        .map(user => user[0]);
    return result
}