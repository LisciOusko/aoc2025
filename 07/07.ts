import * as fs from 'fs';
import { basename } from 'path';

let count = 0;


function main() {
    const rawInput = fs.readFileSync("07/input.txt", "utf-8");
    const rawInputLines = rawInput.split('\n');

    let map: string[][] = [];

    for (let line of rawInputLines) {
        map.push(line.split(''));
    }

    let x: number = findStart(map[0]);

    beamLoop(map, x, 1);
    console.log(count);
}


function findStart(line: string[]) {
    for (let x = 0; x < line.length; x++) {
        if (line[x] === "S") return x;
    }

    return -1;
}

function beamLoop(map: string[][], x: number, y: number) {
    // advance beam

    if (y >= map.length
        || x < 0
        || x >= map[0].length) {
        return;
    }

    const pos = map[y][x];
    if (pos === "^") {
        count++;
        beamLoop(map, x + 1, y);
        beamLoop(map, x - 1, y);
    } else if (pos === "|") {
        return;
    } else {
        map[y][x] = "|";
        beamLoop(map, x, y + 1);
    }
}




main();