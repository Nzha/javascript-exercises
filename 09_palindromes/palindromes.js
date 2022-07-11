const palindromes = function (str) {
    strStrip = str.replace(/!|\.| |,/g, '').toLowerCase();
    reverseStrStrip = strStrip.split('').reverse().join('');
    if (reverseStrStrip === strStrip) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
