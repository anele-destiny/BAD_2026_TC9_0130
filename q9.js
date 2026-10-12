const testValues = [
    42,
    "42",
    true,
    null,
    undefined,
    [1, 2, 3],
    {a: 1},
    function () {},
    NaN
];

console.log("=====Native Typeof Result=====");

//I predict as follows: number, string, boolean, object, undefined, object, object, function, NaN
testValues.forEach(val => {
    console.log(typeof val);
});

//Robust custom getType function
function getType(value) {
    if (value == null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
}

//I predict as follows: number, string, boolean, null, null, array, object, function, number
console.log("\nAccurate getType Results");
testValues.forEach(val => {
    console.log(`${val} ---> ${getType(val)}`);
});