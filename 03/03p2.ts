import * as fs from 'fs';

function readInput() {
    return fs.readFileSync("03/input.txt", "utf-8");
}

function main() {
    const lines = readInput().split('\n');
    let sum = 0;

    for (const line of lines) {
        const highest = getJoltage(line);
        sum += highest;
    }

    console.log(sum);
}

function getJoltage(line: string): number {
    let highest = 0;

    const visitor = (numStr: string, substr: string, layer: number) => {
        if (substr.length < layer) {
            return
        };

        if (!layer) {
            highest = parseInt(numStr);
            return;
        }

        for (let i = 0; i < substr.length; i++) {
            if (parseInt(String(highest).slice(0, numStr.length + 1)) > parseInt(numStr + substr[i])) continue;
            visitor(numStr + substr[i], substr.slice(i + 1), layer - 1);
        }
    }   

    visitor("", line, 12);
    return highest;
}


main();