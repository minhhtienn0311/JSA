// Xu ly bat dong bo ---------------------------------------
// Dong bo: 1 lan thuc thi duoc 1 func => doi cho den khi a xong => b ms run
function myFunc() {
  console.log(1);
  console.log(2);
  console.log(3);
}
myFunc();

// Bat dong bo: khong cho a xong, b tu lam truoc, vd: settimeout(cb, 0)
// => bao gom 2 loai chinh: browser, promise (object)
function d() {
  setTimeout(() => {
    console.log("a");
  }, 0);
  console.log("b");
  console.log("c");
}
d();

// callback: tri hoan thuc thi function con --------------------------
// van de: callback hell => phải lồng nhiều code vào với nhau khi gọi callback => khó đọc
function a(cb) {
  cb();
  console.log(1);
}
function b(cb) {
  cb();
  console.log(2);
}
function c() {
  console.log(3);
}

a(() => {
  b(() => {
    c();
  });
});

// promise ----------------------------------------------------------
// tách ra nhiều code con, mỗi promise => 1 var
const promise1 = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve({data: "data"}); // data
    }, 0);
  } else {
    reject("error");
  }
});

const promise2 = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve("promise 2"); // data
    }, 0);
  } else {
    reject("error");
  }
});

const promise3 = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve("promise 3"); // data
    }, 0);
  } else {
    reject("error");
  }
});

promise1
  .then((data) => {
    console.log(data);
    return promise2;
  })
  .then((data) => {
    console.log(data);
    return promise3;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// async - await --------------------------------------------------
// dễ viết - dễ đọc hơn
// async + await không được để ở cấp global
// await để trước 1 promise
const exeAsync = async () => {
  const result1 = await promise1;
  const result2 = await promise2;
  const result3 = await promise3;
  console.log({ result1, result2, result3 });
};

exeAsync();
