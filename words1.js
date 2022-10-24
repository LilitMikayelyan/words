var a = "hello world";
var b = " llo gag";
var k = 0;
var matrix = new Array(a.length + 1);
for (var i = 0; i < a.length + 1; i++) {
    matrix[i] = new Array(b.length + 1);
    k++;
}
for (let i = 0; i < b.length + 1; i++) {
    matrix[0][i] = 1;
    matrix[i][0] = 0;
    k++;
}
var result = 0;
var start = 0;
for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
        if (a[i] == b[j])
            matrix[i][j] = matrix[i - 1][j - 1] + 1;
        else
            matrix[i][j] = 0;
        if (matrix[i][j] > result) {
            result = matrix[+i][j];
            start = j - matrix[i][j] + 1;
        }
        k++;
    }
}
var word = "";
for (let i = start; i < start + result; i++) {
    word += b[i];
    k++;
}
console.log(word);
console.log(k);