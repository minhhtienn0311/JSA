let n = prompt("chieu cao tam giac:");
for (let i =  1; i <= 1 ; i++) {
    let s = "";
    for(let j = 1; j <= n-1; j++) {
        s += " ";
    }
    if (i == 1 || i == n) {
        for (let k = 1; k <= 2*i-1; k++) {
            if (k == 1 || k == 2*i-1) {
                s += "*";
            } else {
                s += " ";
            }
        }
    }
    console.log(s)
}