(() => {
    let c1 = [0, 0, 0, 1, 0, 0];
    let c2 = [0, 0, 1, 0, 0, 1, 0]
    console.log(jumpingOnClouds(c1));
})()

function jumpingOnClouds(c) {
    // Write your code here
    const arr = c;
    let totalNumber = 0;

    for (let i = 0; i < c.length;) {
        if (arr[i + 2] !== 1 && arr[i + 2] != null) {
            totalNumber++;
            i += 2;
        } else {
            totalNumber++;
            i += 1;
        }
    }

    return (totalNumber - 1);
}