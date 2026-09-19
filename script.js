const heartButton = document.getElementById("heartButton");
const garden = document.querySelector(".garden");
const envelopeArea = document.getElementById("envelopeArea");
const envelope = document.getElementById("envelope");
const letterScreen = document.getElementById("letterScreen");
const closeButton = document.getElementById("close");

/* Klik hati */
heartButton.addEventListener("click", function () {

    // bunga bermekaran
    garden.classList.add("show");

    // sembunyikan tombol hati
    heartButton.style.transform = "scale(0)";
    heartButton.style.opacity = "0";

    // munculkan amplop setelah bunga
    setTimeout(function () {
        envelopeArea.classList.add("show");
    }, 1800);

    // love bertebaran
    createHearts(15);
});


/* Klik amplop */
envelope.addEventListener("click", function () {

    letterScreen.classList.add("show");

    // love lebih banyak saat surat dibuka
    createHearts(25);
});


/* Tutup surat */
closeButton.addEventListener("click", function () {

    letterScreen.classList.remove("show");

});


/* Membuat love terbang */
function createHearts(jumlah) {

    for (let i = 0; i < jumlah; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            Math.random() * 30 + "%";

        heart.style.animationDelay =
            Math.random() * 0.8 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 2500);
    }
}
