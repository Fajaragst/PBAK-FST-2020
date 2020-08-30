// <p id="counter"></p>


// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Sep 7, 2020 23:59:00").getTime();
// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("counter").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";

  // Jika hitungan mundur selesai, tulis beberapa teks
  // var links = document.querySelectorAll("#btn-daful");


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("btn-daful").innerHTML = "EXPIRED";
    document.setAttribute('href', "http://facebook.com");
    document.getElementById("counter").remove() ;
  }
}, 1000);
