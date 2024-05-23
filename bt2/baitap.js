// 1
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i + ' là số chẵn');
    } else {
        console.log(i + ' là số lẻ');
    }
}

//2 
let arr = [1, 2, 3, 4, 5];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]; 
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log('Số nhỏ nhất trong mảng là: ' + min);
console.log('Số lớn nhất trong mảng là: ' + max);

//3 
// Tạo một mảng numbers chứa 10 số nguyên bất kì
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Mảng ban đầu: ', numbers);

// Xóa phần tử đầu tiên của mảng numbers
numbers.shift();
console.log('Mảng sau khi xóa phần tử đầu tiên: ', numbers);

// Xóa phần tử cuối cùng của mảng numbers
numbers.pop();
console.log('Mảng sau khi xóa phần tử cuối cùng: ', numbers);

// Xóa phần tử có giá trị bằng 5 trong mảng numbers (nếu có)
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        numbers.splice(i, 1);
        // Giảm i xuống 1 do mảng đã bị thay đổi sau khi xóa phần tử
        i--;
    }
}
console.log('Mảng sau khi xóa phần tử có giá trị bằng 5 (nếu có): ', numbers);

//4 
// Khởi tạo mảng arr với giá trị bất kì
let arr1 = [1, 2, 3, 4, 5];

// Yêu cầu người dùng nhập một giá trị x và một vị trí index
let x = prompt("Nhập giá trị x: ");
let index = prompt("Nhập vị trí index: ");

// Chuyển đổi x và index sang số nguyên
x = parseInt(x);
index = parseInt(index);

// Kiểm tra nếu index không hợp lệ
if (index < 0 || index > arr1.length) {
    console.log("Index không hợp lệ");
} else {
    // Dịch chuyển các phần tử trong mảng sang phải một vị trí để tạo chỗ trống tại vị trí index
    for (let i = arr1.length; i > index; i--) {
        arr1[i] = arr1[i - 1];
    }

    // Gán giá trị x vào vị trí index
    arr1[index] = x;

    // In ra mảng arr sau khi chèn
    console.log(arr1);
}

//5
function mergeTable(table1, table2, columnKey) {
    let mergedTable = [];

    for (let i = 0; i < table1.length; i++) {
        let row1 = table1[i];
        let matchedRow = null;

        for (let j = 0; j < table2.length; j++) {
            let row2 = table2[j];
            if (row1[columnKey] === row2[columnKey]) {
                matchedRow = row2;
                break;
            }
        }

        if (matchedRow) {
            // Tìm thấy hàng khớp nối, tạo một mảng mới bao gồm các giá trị từ cả hai hàng
            let mergedRow = {...row1, ...matchedRow};
            mergedTable.push(mergedRow);
        } else {
            // Không tìm thấy hàng khớp nối, tạo một mảng mới với các giá từ hàng hiện tại của bảng 1 và các giá trị null cho các cột tương ứng của bảng 2
            let mergedRow = {...row1};
            for (let key in table2[0]) {
                if (!(key in mergedRow)) {
                    mergedRow[key] = null;
                }
            }
            mergedTable.push(mergedRow);
        }
    }

    return mergedTable;
}