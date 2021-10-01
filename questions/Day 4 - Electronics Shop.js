(() => {
    let budget = 10;
    let drives = [5, 2, 8];
    let keyboards = [3, 1];
    console.log(getMoneySpent(keyboards, drives, budget));
})()

function getMoneySpent(keyboards, drives, b) {
    // Write your code here
    let obj = [];
    let pass = false;
    let maxNumber = 0;

    for (let keyboard of keyboards) {
        for (let drive of drives) {
            obj.push(keyboard + drive)
        }
    }

    for (let totalSum of obj) {
        if (totalSum > maxNumber && totalSum <= b) {
            pass = true;
            maxNumber = totalSum;
        }
    }

    if (pass) {
        return maxNumber
    } else {
        return -1
    }
}