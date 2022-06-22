const removeFromArray = function(arr, remove) {
    const start = arr.indexOf(remove)
    arr.splice(start, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
