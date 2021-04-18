document.getElementById("submit").addEventListener("click", getFile);

var count = 0;
function getFile(e) {
  e.preventDefault();
  var data = document.getElementById("myFile").value;
  if (data === "") {
    alert("Invalid File");
  } else {
    if (count === 0) {
      count++;
      data = JSON.stringify(data);
      localStorage.setItem("file", data);
      var old_pic = document.getElementById("change__pic").src;
      old_pic = JSON.stringify(old_pic);
      localStorage.setItem("old_pic", old_pic);
      var new_pic = document.getElementById("change__data__pic");
      var get_data = localStorage.getItem("file");
      get_data = JSON.parse(get_data);
      get_data = get_data.replace("C:\\fakepath\\", "");
      var img = `<img src = "${get_data}" width = "290">`;
      new_pic.innerHTML = img;
      alert("Successfully Uploaded");
    } else {
      data = JSON.stringify(data);
      localStorage.setItem("recent", data);
      var put_pic = localStorage.getItem("recent");
      put_pic = JSON.parse(put_pic);
      put_pic = put_pic.replace("C:\\fakepath\\", "");
      img = `<img src = "${put_pic}" width = "290">`;
      var new_pic = document.querySelector("#change__data__pic");
      new_pic.innerHTML = img;
      count++;
      alert("Successfully Uploaded");
    }
  }
}

document.getElementById("cancel").addEventListener("click", function (e) {
  e.preventDefault();
  var old_pic = localStorage.getItem("old_pic");
  old_pic = JSON.parse(old_pic);
  var put_old = document.getElementById("change__data__pic");
  var img = `<img src = "${old_pic}" width = "290">`;
  put_old.innerHTML = img;

  location.reload();
});
