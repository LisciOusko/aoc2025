import * as fs from 'fs';

let count = 0;


function main() {
    const rawInput = fs.readFileSync("07/input.txt", "utf-8");
    const rawInputLines = rawInput.split('\n');

    let map: string[][] = [];

    for (let line of rawInputLines) {
        map.push(line.split(''));
    }

    let start: number = findStart(map[0]);
    // beamLoop(map, x, 1);
    console.log(count);
    analyzePaths(map, start);
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
        count++;
        return;
    }

    const pos = map[y][x];
    if (pos === "^") {
        beamLoop(map, x + 1, y);
        beamLoop(map, x - 1, y);
    } else {
        map[y][x] = "|";
        beamLoop(map, x, y + 1);
    }
}

function analyzePaths(map: string[][], start: number) {
    let pathCount: number[] = Array(map[0].length).fill(0);

    for (let y = 0; y < map.length; y++) {
        let line: string[] = map[y];

        if (y == 0) pathCount[start] = 1;

        let splitters: number[] = [];

        for (let x = 0; x < line.length; x++) {
            let char: string = line[x];

            // if (char === "|") pathCount[x]++;
            if (char === "^") splitters.push(x);
        }

        if (splitters.length == 0) {
            continue
        };

        for (const x of splitters) {
            if (pathCount[x] != 0) {
                pathCount[x-1] += pathCount[x];
                pathCount[x+1] += pathCount[x];
                pathCount[x] = 0;
            }

            // if (map[y - 1][x] === "|") pathCount++;
        }

        console.log(pathCount);
    }

    let sum = 0;
    for (const num of pathCount) sum += num;
    console.log(sum);
}




main();