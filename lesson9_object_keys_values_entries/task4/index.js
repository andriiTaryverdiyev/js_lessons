function addPropertyV1(userData, userId) {
    return userData.id = userId
}

function addPropertyV2(userData, userId) {
    userData = (Object.assign({...userData, id: userId }))
    return userData
}

function addPropertyV3(userData, userId) {
    return (Object.assign({...userData, id: userId }))
}

function addPropertyV3(userData, userId) {
    return ({...userData, id: userId })
}

const user = {
    name: 'Sam',
};
addPropertyV2(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }