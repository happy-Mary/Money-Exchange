module.exports = function makeExchange(currency) {
    const allowedCurr = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
    let obj = {};

    if(currency <= 0) {
        obj = {};
    } else if (currency >= 10000) {
        obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        for(let key in allowedCurr) {
            let value = allowedCurr[key];
            let x = parseInt(currency/value);
            if(x > 0) { obj[key] = x; }
            currency = currency%value;
        }
    }
    return obj;
}

