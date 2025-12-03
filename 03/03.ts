import * as fs from 'fs';

function readInput() {
    return fs.readFileSync("03/input.txt", "utf-8");
}

function main() {
    const lines = readInput().split('\n');
    let sum = 0;

    for (const line of lines) {
        let highest: number = 0;

        for (let i = 0; i < line.length; i++) {
            const remaining = line.substring(i + 1);

            const char = line[i];
            
            for (const charCurr of remaining) {
                let num = parseInt(char + charCurr);
                if (highest < num) highest = num;
            }
        }       

        sum += highest;
    }

    console.log(sum);
}


main();