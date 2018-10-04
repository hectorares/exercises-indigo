const numbers = [3675356291, 2709360626];

console.log('results: ', getProduct(10, 5, 2, numbers));

function validConstraints(n, k, t) {
    return 1 <= t && t <= 100 && 1 <= k && k <= 7 && k <= n && n <= 1000 ? true : false;
};

function getProduct(n, k, t, values) {
    if (validConstraints(n, k, t) && values.length === t) {
        results = [];
        for (let i = 0; i < t; i++) {
            let result = 0;
            let arrayNumbers = (values[i]).toString(n).split("").map(function (v) { return parseInt(v) })
            for (let j = 0; j < n - (k - 1); j++) {
                let prod = 1;
                for (m = j; m < (k + j); m++) {
                    prod = prod * arrayNumbers[m]
                }
                if (prod > result) {
                    result = prod;
                }
            }
            results.push(result);
        }
        return results
    } else {
        return false
    }

}