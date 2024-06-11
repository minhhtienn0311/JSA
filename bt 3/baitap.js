// bai 1
// Khai báo mảng
let array = ["a", "b", "c", "d"];

// Sử dụng for...in để in ra chỉ mục của từng phần tử
console.log("Chỉ mục của mảng:");
for (let key in array) {
  console.log(key);
}

// Sử dụng for...of để in ra giá trị của từng phần tử
console.log("Giá trị của mảng:");
for (let element of array) {
  console.log(element);
}

// bai 2
let maxValue = -Infinity; // Khởi tạo giá trị lớn nhất ban đầu là an vô cùng
let minValue = Infinity; // Khởi tạo giá trị nhỏ nhất ban đầu là dương vô cùng

for (const key in array) {
  const Jyalue = array[key];
  maxValue = Math.max(maxValue, value);
  minValue = Math.min(minValue, value);
}

console.log("Giá trị lớn nhất:", maxValue);
console.log("Giá trị nhỏ nhất:", minValue);

// let maxValue = -Infinity;
// let minValue = Infinity;

for (const value of array) {
  maxValue = Math.max(maxValue, value);
  minValue = Math.min(minValue, value);
}

console.log("Giá trị lớn nhất:", maxValue);
console.log("Giá trị nhỏ nhất:", minValue);

// bai 3
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [];

for (const key in array1) {
  newArray.push(array1[key]);
}
for (const key in array2) {
  newArray.push(array2[key]);
}
console.log(newArray); // In ra: [1, 2, 3, 4, 5, 6]

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = [...array1, ...array2];

console.log(newArray); // In ra: [1, 2, 3, 4, 5, 6]
