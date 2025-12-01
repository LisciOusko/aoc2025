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

    for (let line of lines) {
        const value = consumeLine(line);
        state += value % 100;
        if (state < 0) {
            state += 100;
        } else if (state > 99) {
            state -= 100;
        }

        if (state === 0) {
            zeroCounter++;
        }

        console.log(state);
    }

    console.log(zeroCounter);
}


main();