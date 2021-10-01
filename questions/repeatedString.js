(() => {
    let s = "aba";
    let n = 10;
    console.log(repeatedString(s, n));
})()

function repeatedString(s, n) {
    // Write your code here
    let numberOfAs = 0;
    let stringArray = s.split("");

    let stringArrayLength = stringArray.length
    stringArray.map((item) => {
        if (item === "a") {
            numberOfAs++
        }
    })

    return ((Math.round((numberOfAs * n) / stringArrayLength)))
}