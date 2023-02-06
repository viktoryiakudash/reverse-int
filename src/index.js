module.exports = function reverse(n) {
    const positiveChar = Math.abs(n);
    const char = positiveChar.toString();
    let charReverse = "";
    for (let i = 0; i < char.length; i = i + 1) {
        if (char[char.charlength - 1] !== '0') {
            charReverse = char[i] + charReverse;
        } else {
            charReverse = charReverse;
        }
        
    };
    return charReverse;
};
