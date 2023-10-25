function ceklogin() {
  var username = dokument.getElementById("username").value;
  var password = dokument.getElementById("password").value;

  if (username === "kelompok 1" && password === "kelompok 1") {
    dokument.getElementById("hasilLogin").innerHTML = "Login berhasil!";
    window.location = "Welcomepage.html";
  } else {
    dokument.getElementById("hasillogin").innerHTML =
      "Login gagal.Silahkan coba lagi";
  }
}
