'use strict';

const objectAssign = require("object-assign");

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
    //console.log(keysList.reduce((acc, el, i) => [...acc, el], []))
    return keysList.reduce((acc, el, i) => Object.assign({...acc, [el]: valuesList[i] }), {})
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }