import * as fs from 'fs';

function readInput () {
    return fs.readFileSync("02/input.txt", "utf-8");
}

function main () {
    const inputRaw = readInput();
    let sum = 0;

    for (const range of inputRaw.split(',')) {
        const rangeArr = range.split("-");
        const rangeLow = parseInt(rangeArr[0]);
        const rangeHi = parseInt(rangeArr[1]);

        for (let num = rangeLow; num <= rangeHi; num++) {
            let numStr = String(num);

            if (numStr.length % 2 != 0) {
                continue;
            }

            const firstHalf = numStr.slice(0, numStr.length / 2);
            const secondHalf = numStr.slice(numStr.length / 2);

            if (firstHalf == secondHalf) sum += num;
        }
    }

    console.log(sum);
}


main();