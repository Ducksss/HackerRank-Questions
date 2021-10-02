(() => {
    let n = 4;
    (staircaseV2(n));
})()

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i))
    }
}

function staircaseV2(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(n - i + 1).padStart(n, " "))
    }
}