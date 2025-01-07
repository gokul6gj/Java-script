
arr2d = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

// Flatten and count frequencies

function countnumber(accumulator, currVal) {
        if (accumulator[currVal]) {
            accumulator[currVal]++;
        } else {
            accumulator[currVal] = 1;
        }
        return accumulator;
}
let count = arr2d.flat().reduce(countnumber,{});
console.log(count); // { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
