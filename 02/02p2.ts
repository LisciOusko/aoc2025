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

            for (let windowSize = 1; windowSize <= numStr.length/2; windowSize++) {
                if (numStr.length % windowSize != 0) continue;

                let different = false;
                let prevChunk: string = "";

                for (let rep = 0; rep < numStr.length / windowSize; rep++) {
                    let currChunk = numStr.slice(rep * windowSize, (rep * windowSize) + windowSize);

                    if (!prevChunk) {
                        prevChunk = currChunk;
                        continue;
                    }

                    if (prevChunk != currChunk) {
                        different = true;
                        break;
                    };
                }

                if (!different) {
                    sum += num;
                    break;
                };
            }
        }
    }

    console.log(sum);
}


main();