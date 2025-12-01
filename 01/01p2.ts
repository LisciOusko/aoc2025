import * as fs from 'fs';


function getInput() {
    return fs.readFileSync('01/input.txt', 'utf-8');
}

function consumeLine (line: string): number {
    const direction = line[0];
    let value = parseInt(line.slice(1));

    if (direction === "L") {
        value *= -1;
    }

    return value;
}

function main() {
    const input = getInput();
    const lines = input.split('\n');
    let state = 50;
    let zeroCounter = 0;
    let previousState = 50;

    for (let line of lines) {
        let value = consumeLine(line);
        const overflowCount = Math.floor(Math.abs(value / 100));
        zeroCounter += overflowCount;

        value %= 100;
        state += value;

        if (state > 99) {
            state -= 100;
            zeroCounter++;
        } else if (state < 0) {
            state += 100;
            if (previousState != 0) zeroCounter++;
        } else if (state == 0) {
            zeroCounter++;
        }

        console.log(line, previousState, value, state, zeroCounter);
        previousState = state;
    }

    console.log(zeroCounter);
}


main();