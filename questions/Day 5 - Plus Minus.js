(() => {
    let arr = [-4, 3, -9, 0, 4, 1]
    console.log(plusMinus(arr));
})()

function plusMinus(arr) {
    // Write your code here
    let neutral = 0;
    let positive = 0;
    let negative = 0;

    arr.map((item) => {
        if (item === 0) {
            neutral++
        } else if (item > 0) {
            positive++
        } else {
            negative++
        }
    })

    let total = arr.length
    return [(positive / total).toFixed(6), (negative / total).toFixed(6), (neutral / total).toFixed(6)]
}