document.getElementById("register").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  if (name === "" || age === "" || email === "") {
    alert("xin nhap day du");
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    alert("dang ky thanh cong");
  }
});
