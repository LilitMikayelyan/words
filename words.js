var a = "hello world";
var b = "hel world hell";
var a1 = a.split(" ");
var b1 = b.split(" ");
var maxx = [];
var p = 0;
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < b1.length; j++) {
        var ind = 0;
        var max = "";
        for (let k = 0; k < b[j].length; k++) {
            if (a1[i][ind] == b[j][k]) {
                max += b[j][k];
                ind++;
            }
            else
                break;
            p++;
        }
        if (max == "") continue;
        else maxx.push(max);
    }
}
var result = maxx[0];
for (let i = 1; i < maxx.length; i++) {
    if (maxx[i].length > result.length)
        result = maxx[i];
    p++;
}
console.log(result);
console.log(p);