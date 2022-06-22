const repeatString = function(str, n) {
    let string = '';
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            string += str;
        }
        return string;
    }
    return 'ERROR';
  };

// Do not edit below this line
module.exports = repeatString;
