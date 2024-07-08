// Khởi tạo menu ban đầu
let menu = ["rau xào", "thịt luộc", "gà rán"];

// Hàm thêm món ăn vào menu
function create(newDish) {
    menu.push(newDish);
    updateLocalStorage();
}

// Hàm hiển thị danh sách món ăn
function read() {
    const menuString = menu.join(", ");
    console.log(`Danh sách món ăn: ${menuString}`);
}

// Hàm cập nhật món ăn
function update(oldDish, newDish) {
    const index = menu.indexOf(oldDish);
    if (index !== -1) {
        menu[index] = newDish;
        updateLocalStorage();
    } else {
        console.log("Không tìm thấy món ăn cần cập nhật.");
    }
}

// Hàm xóa món ăn
function remove(dishToRemove) {
    const index = menu.indexOf(dishToRemove);
    if (index !== -1) {
        menu.splice(index, 1);
        updateLocalStorage();
    } else {
        console.log("Không tìm thấy món ăn cần xóa.");
    }
}

// Lưu trữ menu vào LocalStorage
function updateLocalStorage() {
    localStorage.setItem("menu", JSON.stringify(menu));
}

// Xử lý người dùng nhập vào
const userInput = prompt("Nhập vào ký tự (C, R, U, D):");
switch (userInput.toUpperCase()) {
    case "C":
        const newDish = prompt("Mời nhập món ăn muốn thêm vào menu:");
        create(newDish);
        break;
    case "R":
        read();
        break;
    case "U":
        const oldDish = prompt("Mời nhập tên món muốn cập nhật:");
        const updatedDish = prompt("Mời nhập tên món ăn mới:");
        update(oldDish, updatedDish);
        break;
    case "D":
        const dishToDelete = prompt("Mời nhập tên món muốn xóa:");
        remove(dishToDelete);
        break;
    default:
        console.log("Ký tự không hợp lệ.");
}
