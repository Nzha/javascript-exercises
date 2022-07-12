const findTheOldest = function(arr) {  
    return arr.reduce((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? a : b);
};

// Do not edit below this line
module.exports = findTheOldest;
