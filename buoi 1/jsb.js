// alert("Hello World!");
// confirm("Are you ok ?");
// var a = prompt("How old are you ?");
// console.log(typeof(a));

// function write(str) {
//     document.write(str)
// }
// setTimeout(function () {
//     write("Hello World!")    
// }, 3000)

// var i = 0;
// var a = setInterval(function() {
//     i++;
//     console.log(i);
// }, 1000);

// setTimeout(() => {
//    clearInterval(a); 
// }, 10000);

// var a = 1;
// const pi = 3.14;
// // pi += 2;
// for (let index = 0; index < 3; index++) {
//     const element = array[index];
// }

var c = 10 % 2;
console.log(c);

var d = Math.floor(11/2);
console.log(d);

var e = 3**2;
console.log(e);

var a = 1;
a += 5;
if ((a = 7)) {
    console.log(true);
}
console.log(a);

// 4. Toan tu logic: Logical(|| && !)
// and && (cả 2 vế là True => True, còn lại là false)
var m = 10 < 3 && 3 > 1; // => false
// or || (cả 2 vế là False => False, còn lại là True)
var n = 9 < 6 || 4 > 2; // => true
// not !
var z = m || (!n && !(10 + 2 > 3 * 1)); // => false

const age = Number.parseInt(prompt("Nhap tuoi: "));
if (age < 0) {
  document.write("You're not born");
} else if (age < 18) {
  document.write("You're a teen");
} else if (age < 60) {
  document.write("You're an adult");
} else if (age < 100) {
  document.write("You're an old");
} else {
  document.write("You're very old");
}

function sum1(x, y) {
    return x + y;
  }
  
  // arrow func
  const sum = (x, y) => x + y;
  console.log(sum(12, 10));

  // - Object ------------------------------------------
// {} object, [] list, "" string, 12 number, () function
// key: value => key khong duoc trung
const student = {
    name: "Ngoc Diep",
    grade: 10,
  };
  
  // create a new property
  student.courses = ["JSB", "JSA", "JSI"];
  console.log(student);
  
  // read a property
  console.log(student.grade);
  
  // update a property
  student.grade++;
  console.log(student.grade);
  
  // delete a property
  delete student.grade
  console.log(student)

  let list_1 = [1, 2,5 ,3 ,9,8,6];
  let list_square = list_1.map((item) => item ** 2);
  console.table(list_square)

  let list_over30 = new Array();

  list_square.forEach(element => {
    if (element >30 ) {
        list_over30.push(element);
    }
  });
  console.table(list_over30);

  let list_over30_1 = list_square.filter((item) => 30 );
  console.table(list_over30_1)

  // update item in list
list_square[3] = 15;

// read list
for (let index = 0; index < list_square.length; index++) {
  console.log(index, list_square[index]);
}

// delete item in list
list_square.splice(3, 1);
list_square.pop(); // xoa phan tu cuoi