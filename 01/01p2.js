"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput() {
    return fs.readFileSync('01/input.txt', 'utf-8');
}
function consumeLine(line) {
    var direction = line[0];
    var value = parseInt(line.slice(1));
    if (direction === "L") {
        value *= -1;
    }
    return value;
}
function main() {
    var input = getInput();
    var lines = input.split('\n');
    var state = 50;
    var zeroCounter = 0;
    var previousState = state;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var value = consumeLine(line);
        state += value;
        var overflowCount = Math.floor(Math.abs(state / 100));
        state %= 100;
        zeroCounter += overflowCount;
    }
    console.log(zeroCounter);
}
main();
