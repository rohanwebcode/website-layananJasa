//PROGRAM JAM
function updateClock() {
  const now = new Date();
  const jam = String(now.getHours()).padStart(2, "0");
  const menit = String(now.getMinutes()).padStart(2, "0");
  const detik = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("jam").innerHTML = jam;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("detik").innerHTML = detik;
}

setInterval(updateClock, 1000);
updateClock();

//container-6---SUMBIT---BTN---ONCLICK
function textFunction() {
  document.getElementById("textDemo").innerHTML =
    "Thank you, your review will help us *_*";
}
