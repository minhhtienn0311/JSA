function CS(w, h) {
    return {
        w: w,
        h: h,
        C: (w + h)*2,
        S: w * h,
    };
}

const objHCN = (w, h) => new Object({w: w,h: h,C: (w + h)*2,S: w * h,});
console.log(C(4, 4));
console.log(objHCN(3,5));

const a = new Number(12);
console.log(typeof null);