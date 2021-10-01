(() => {
    let s = "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq";
    let n = 549382313570;
    console.log(repeatedString(s, n));
})()

function repeatedString(s, n) {
    // Write your code here
    let divider = Math.floor(n / s.length);
    let quotient = n % s.length;

    // general
    let numberOfAs = 0;
    for (let item of s) {
        if (item === "a") {
            numberOfAs++
        }
    }

    let sum = divider * numberOfAs
    for (let i = 0; i < quotient; i++) {
        if (s[i] === "a") {
            sum++
        }
    }

    return sum;
}