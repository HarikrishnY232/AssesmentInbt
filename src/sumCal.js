"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringReducer = /** @class */ (function () {
    function StringReducer() {
    }
    StringReducer.prototype.add = function (numbers) {
        if (numbers.length < 2) {
            if (numbers === "") {
                return 0;
            }
            else {
                return this.convertToInt(numbers);
            }
        }
        else {
            var delimiter = ",";
            if (numbers.match(/\/\/(.*)\n(.*)/)) {
                delimiter = numbers.charAt(2);
                numbers = numbers.substring(4);
            }
            var numList = this.splitNumbers(numbers, new RegExp(delimiter + "|\n"));
            return this.sum(numList);
        }
    };
    StringReducer.prototype.splitNumbers = function (numbers, divider) {
        return numbers.split(divider);
    };
    StringReducer.prototype.convertToInt = function (num) {
        return parseInt(num);
    };
    StringReducer.prototype.sum = function (numbers) {
        var total = 0;
        var negativeString = "";
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var number = numbers_1[_i];
            var num = this.convertToInt(number);
            if (num < 0) {
                if (negativeString === "") {
                    negativeString = number;
                }
                else {
                    negativeString += "," + number;
                }
            }
            if (num < 1000) {
                total += num;
            }
        }
        if (negativeString !== "") {
            throw new Error("Negatives not allowed: " + negativeString);
        }
        return total;
    };
    return StringReducer;
}());
exports.default = StringReducer;
