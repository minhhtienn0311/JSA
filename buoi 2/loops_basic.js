//Tao data
var obj1 = {
    name: "a",
    age: 1
};

var obj2 = {
    name: "b",
    age: 2
};

var obj3 = {
    name: "c",
    age: 3
};

var obj4 = {
    name: "d",
    age: 4
};

var obj5 = {
    name: "wdasdw",
    age: 5
};

const data_list = [obj1, obj2, obj3, obj4, obj5];

// for in - object - for loops
// function getRequest() {
//     const request = prompt("Type in:")
//     return request.trim().toLowerCase();
// }

// function searchDataByReq (req) {
//     let result_list = [];
//     data_list.map((object) => {
//         for (const key in object) {
//             if (object[key].toString().toLowerCase().indexOf(req) != -1) {
//                 result_list.push(object);
//             }
//         }
//     });
//     return result_list;
// }

// function createHTMLCode (lis) {
//     const list_container = document.querySelector("#data-list");
//     lis.forEach(element => {
//         list_container.innerHTML += `<li>${JSON.stringify(element) }</li>`;
//     });
// }

// createHTMLCode(searchDataByReq(getRequest()));

// While
// prefix - posfix
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm
let a = 10;
console.log(++a);
console.log(a++);

//chac chan co it nhat 1 lan thuc hien lenh trong do
let i = 0;
// do {
//     i++;
// } while (i < 5);
// console.log(i);

/** 6 kieu du lieu sau khi convert => boolean => false (con lai deu la true)
 * 0
 * false
 * chuoi rong '' / ""
 * undefined
 * null
 * NaN
 */

let userInput = "";
while (!userInput) {
    userInput = Number.parseInt(prompt("Age:"));
    if (Number.isInteger(userInput) && Number.parseInt(userInput) > 0) {
        document.write(userInput);
        break;
    } else {
        userInput = "";
    }
}