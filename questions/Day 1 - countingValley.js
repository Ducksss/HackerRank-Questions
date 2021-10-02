(() => {
    let steps = 8;
    let path = "UDDDUDUU";
    console.log(countingValleysV3(steps, path));
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

        if ((altitudeArray[i] == 0) && (passing)) {
            valleyNumber++
        }
    }

    return (valleyNumber)
}

function countingValleysV2(steps, path) {
    let valleyCount = 0;
    let position = 0;
    let position_obj = {
        'U': 1,
        'D': -1
    }
    for (let i = 0; i < steps; i++) {
        position += position_obj[path[i]]

        if (position == 0 && path[i] == 'U') {
            valleyCount++
        }
    }
    return valey_count
}

function countingValleysV3(steps, path) {
    let valleyCount = 0;
    let altitude = 0;
    let positionObj = {
        "U": 1,
        "D": -1
    }

    for (let i = 0; i < steps; i++) {
        altitude += positionObj[path[i]]

        if (altitude === 0 && path[i] === "U") {
            valleyCount++;
        }
    }

    return valleyCount;
}