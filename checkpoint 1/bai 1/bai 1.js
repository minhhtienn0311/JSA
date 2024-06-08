function tinhGiaiThua(n) {
    let giaiThua = 1;
    for(let i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}

let n = prompt ("Nhap n:");
console.log( tinhGiaiThua(n) );
