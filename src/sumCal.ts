class StringReducer {
    add(numbers: string): number {
        if (numbers.length < 2) {
            if (numbers === "") {
                return 0;
            } else {
                return this.convertToInt(numbers);
            }
        } else {
            let delimiter = ",";
            if (numbers.match(/\/\/(.*)\n(.*)/)) {
                delimiter = numbers.charAt(2);
                numbers = numbers.substring(4);
            }

            const numList = this.splitNumbers(numbers, new RegExp(delimiter + "|\n"));
            return this.sum(numList);
        }
    }

    private splitNumbers(numbers: string, divider: RegExp): string[] {
        return numbers.split(divider);
    }

    private convertToInt(num: string): number {
        return parseInt(num);
    }

    private sum(numbers: string[]): number {
        let total = 0;
        let negativeString = "";

        for (const number of numbers) {
            const num = this.convertToInt(number);
            if (num < 0) {
                if (negativeString === "") {
                    negativeString = number;
                } else {
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
    }
}

export default StringReducer;
