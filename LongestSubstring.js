let string = "abcabcbb";
// loop through string and keep appendinng

function solution(str) {
    let sub = "";
    let subDict = {};

    for (let letter of str) {
        if (!subDict[letter]) {
            sub += letter;
            subDict[letter] = 1;
        } else {
            sub = letter;
            subDict = {};
            subDict[letter] = 1;
        }
    }

    console.log(sub);
    return sub;
}

solution(string);