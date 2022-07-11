const palindromes = function (str) {
    strStrip = str.toLowerCase().replace(/[^a-z]/g, '');
    reverseStrStrip = strStrip.split('').reverse().join('');
    return reverseStrStrip === strStrip;
};

// Do not edit below this line
module.exports = palindromes;
