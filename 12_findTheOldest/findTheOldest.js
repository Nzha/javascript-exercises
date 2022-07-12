const findTheOldest = function(arr) {  
    let oldest = arr.reduce(function(prev, curr) {

        // If person is still alive, replace year of death with current year to get age
        if (!prev.yearOfDeath || !curr.yearOfDeath) {
            let date =  new Date().getFullYear();
            prev.yearOfDeath = date;
            curr.yearOfDeath = date;
        }
        return (prev.yearOfDeath - prev.yearOfBirth) > (curr.yearOfDeath - curr.yearOfBirth) ? prev : curr;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
