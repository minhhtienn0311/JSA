// get user list (max: 10)
async function get_user(limit) {
  try {
    // goi den du lieu trong API
    const response = await fetch(
      "https://fakestoreapi.com/users?limit=" + limit
    );

    // kiem tra loi
    if (!response.ok) {
      // quang loi
      throw new Error("Response was not ok");
    }
    const data = await response.json(); // chuyen json => js datatype
    console.log(data);
  } catch (err) {
    console.log(err);
    return;
  }
}
