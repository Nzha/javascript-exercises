const removeFromArray = function(arr, value1, value2, value3, value4) {
    for (let i = 1; i < arguments.length; i++){
        if (arr.indexOf(arguments[i]) !== -1) {
            const start = arr.indexOf(arguments[i]);
            arr.splice(start, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
