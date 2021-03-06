/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
    obj.key = value
    console.log(obj)
}

function addPropertyV2(obj, key, value) {
    obj = Object.assign({...obj, [key]: value })
    console.log(obj)
}

function addPropertyV3(obj, key, value) {
    return Object.assign({...obj, [key]: value })
}

function addPropertyV4(obj, key, value) {
    return {...obj, [key]: value }
}

// examples
const transaction = {
    value: 170,
};
addPropertyV1(transaction, 'currency', 'USD');
addPropertyV2({ value: 170, }, 'currency', 'USD');
//addPropertyV3(transaction, 'currency', 'USD');
//addPropertyv4(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }