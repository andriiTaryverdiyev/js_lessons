const superRound = (num, prec) => {
    const coef = Number(`1${'0'.repeat(prec)}`)
    return [Math.floor(num * coef) / coef,
        Math.trunc(num * coef) / coef,
        Math.ceil(num * coef) / coef,
        Math.round(num * coef) / coef,
        Number(num.toFixed(prec))
    ]
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]