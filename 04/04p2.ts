import * as fs from 'fs';


function main() {
    const mapRaw = fs.readFileSync('04/input.txt', 'utf-8');
    let mapLines = mapRaw.split('\n');
    let changeCount = 0;

    let map: string[][] = [];

    for (const line of mapLines) {
        map.push(line.split(''));
    }

    while (true) {
        let count = 0;
        let rolls: number[][] = []

        for (let i = 0; i < map[0].length; i++) {
            for (let j = 0; j < map.length; j++) {
                if (map[i][j] !== "@") continue;
                if (countRolls(map, i, j) < 4) {
                    count++;
                    rolls.push([i, j]);
                }
            }
        }

        if (rolls.length == 0) break;

        for (const roll of rolls) {
            map[roll[0]][roll[1]] = 'x';
            changeCount++;
        }

        console.log(count);
    }
    console.log("total change count: ", changeCount);
}

function countRolls(map: string[][], i: number, j: number) {
    let rollCount = 0;
    let directions: number[][] = [];

    if (i > 0) directions.push([-1, 0]);
    if (i > 0 && j > 0) directions.push([-1, -1]);
    if (i > 0 && j < map[0].length - 1) directions.push([-1, 1]);
    if (i < map.length - 1) directions.push([1, 0]);
    if (i < map.length - 1 && j > 0) directions.push([1, -1]);
    if (i < map.length - 1 && j < map[0].length - 1) directions.push([1, 1]);
    if (j > 0) directions.push([0, -1]);
    if (j < map[0].length - 1) directions.push([0, 1]);

    for (const direction of directions) {
        if (checkRoll(map, i + direction[0], j + direction[1])) rollCount++;
    }

    return rollCount;
}

function checkRoll(map: string[][], i: number, j: number) {
    return map[i][j] === "@";
}



main();