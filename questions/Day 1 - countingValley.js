(() => {
    let steps = 8;
    let path = "UDDDUDUU";
    console.log(countingValleys(steps, path));
})()

function countingValleys(steps, path) {
    // Write your code here
    let altitude = 0;
    let valleyNumber = 0;
    let passing = false;
    let altitudeArray = [];

    // Code
    (path.split('')).map((item) => {
        if (item === "U") {
            altitude++
        } else {
            altitude--
        }
        altitudeArray.push(altitude)
    })

    for (let i = 0; i < altitudeArray.length; i++) {
        if (altitudeArray[i] > 0) {
            passing = false;
        } else {
            if (altitudeArray[i - 1] > 0) {
                passing = false;
            } else {
                passing = true;
            }
        }

        if (((altitudeArray[i] == 0)) && (passing)) {
            valleyNumber++
        }
    }

    return(valleyNumber)
}