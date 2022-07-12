const findTheOldest = function(arr) {  
    // return arr.reduce((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? a : b);

    let oldest = arr.reduce(function(prev, curr) {
        return (prev.yearOfDeath - prev.yearOfBirth) > (curr.yearOfDeath - curr.yearOfBirth) ? prev : curr;
    });

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
