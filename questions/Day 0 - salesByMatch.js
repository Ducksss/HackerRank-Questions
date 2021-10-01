(() => {
    let n = 9;
    let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    console.log(sockMerchant(n, ar));
})()

function sockMerchant(n, ar) {
    // Write your code here
    let pairSum = 0;
    let distinctObjects = [...new Set(ar)];

    let obj = distinctObjects.map((item) => {
        return { "socks": item, "count": 0 };
    })

    ar.map((item) => {
        // console.log(item)
        let delta = (distinctObjects.indexOf(item))
        obj[delta].count = obj[delta].count + 1
    })

    obj.map((item) => {
        pairSum += (Math.floor(item.count / 2))
    })

    return (pairSum);
}