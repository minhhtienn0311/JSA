// bai 1
// Giả sử bộ dữ liệu người dùng được lưu trữ dưới dạng một mảng các đối tượng
let users = [
  { name: "Phước", age: 25 },
  { name: "Linh", age: 30 },
];

// Lưu bộ dữ liệu người dùng vào Local Storage
localStorage.setItem("users", JSON.stringify(users));

// Chức năng 1: Tìm kiếm và cập nhật thông tin người dùng
function updateUser(oldName, newName) {
  // Lấy dữ liệu từ Local Storage và chuyển về dạng mảng
  let users = JSON.parse(localStorage.getItem("users"));

  // Tìm và cập nhật tên người dùng
  for (let user of users) {
    if (user.name === oldName) {
      user.name = newName;
      break;
    }
  }

  // Lưu lại vào Local Storage
  localStorage.setItem("users", JSON.stringify(users));
}

// Chức năng 2: Xóa người dùng
function deleteUser(name) {
  // Lấy dữ liệu từ Local Storage và chuyển về dạng mảng
  let users = JSON.parse(localStorage.getItem("users"));

  // Lọc ra người dùng không phải là người cần xóa
  users = users.filter((user) => user.name !== name);

  // Lưu lại vào Local Storage
  localStorage.setItem("users", JSON.stringify(users));
}

// Chức năng 3: Xóa toàn bộ dữ liệu người dùng
function clearUsers() {
  localStorage.removeItem("users");
}

// Gọi hàm để thực hiện chức năng
updateUser("Phước", "Hà"); // Cập nhật tên từ 'Phước' thành 'Hà'
deleteUser("Phước"); // Xóa người dùng tên 'Phước'
clearUsers(); // Xóa toàn bộ dữ liệu người dùng

// bai 2
let count = 10;

const timerId = setInterval(() => {
  document.getElementById("countdown").textContent = count;
  count--;
  if (count === 0) {
    clearInterval(timerId);
    alert("Đã hết giờ!");
  }
}, 1000); // 1000 mili giây = 1 giây

//bai 5
// Lời bài hát được lưu trong một mảng
const lyrics = [
  'Câu 1: Khi bình minh đến',
  'Câu 2: Ta bắt đầu một ngày mới',
  'Câu 3: Với niềm tin và hy vọng',
  'Câu 4: Ta bước đi trên con đường của mình',
  'Câu 5: Và hát lên khúc ca của tự do'
];

// Hàm hiển thị lời bài hát
function displayLyrics(lyrics) {
  let index = 0; // Chỉ mục của dòng hiện tại

  // Hàm hiển thị một dòng và chuẩn bị cho dòng tiếp theo
  function nextLine() {
    if (index < lyrics.length) {
      console.log(lyrics[index++]); // Hiển thị dòng hiện tại và tăng chỉ mục
      setTimeout(nextLine, 1000); // Đặt thời gian chờ để hiển thị dòng tiếp theo
    }
  }

  nextLine(); // Bắt đầu hiển thị từ dòng đầu tiên
}

// Gọi hàm để bắt đầu hiển thị lời bài hát
displayLyrics(lyrics);