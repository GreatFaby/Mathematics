'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the handshake function below.
 */
function handshake(n) {
        // this is based on the fact that there will be the n number of people in a room            and there will be 2 hands being shaked and since it is a combination it will            be nC2 which in general terms is n(n-1)/2 
        return n * (n - 1) / 2

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = handshake(n);

        ws.write(result + "\n");
    }

    ws.end();
}
