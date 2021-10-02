(() => {
    let a = [1, 2, 3, 4, 5]
    let d = 4;
    (rotLeft(a, d));
})()

function rotLeft(a, d) {
    // let obj = []

    // for (var i = 0; i < a.length; i++) {
    //     obj.push({ "position": i, "newv1": i + d, "newv2": i - d, "original": a[i] })
    // }

    let arr = []
    for (var i = -a.length + 1; i <= 0; i++) {
        arr.push(a[-i])
    }
    console.log(obj)
}
