const heartButton =
    document.getElementById("heartButton");

const garden =
    document.getElementById("garden");

const envelopeArea =
    document.getElementById("envelopeArea");

const envelope =
    document.getElementById("envelope");

const letterScreen =
    document.getElementById("letterScreen");

const closeButton =
    document.getElementById("close");

const surpriseButton =
    document.getElementById("surpriseButton");

const bouquet =
    document.getElementById("bouquet");

const gabriela =
    document.getElementById("gabriela");


/* KLIK HATI */

heartButton.addEventListener("click", function () {

    garden.classList.add("show");

    createHearts(15);

    heartButton.style.transform =
        "scale(0)";

    heartButton.style.opacity =
        "0";

    setTimeout(function () {

        envelopeArea.classList.add("show");

    }, 1800);
});


/* KLIK AMPLOP */

envelope.addEventListener("click", function () {

    letterScreen.classList.add("show");

    createHearts(20);
});


/* KLIK KEJUTAN */

surpriseButton.addEventListener("click", function () {

    /* tombol dikunci supaya tidak diklik berkali-kali */
    surpriseButton.disabled = true;

    surpriseButton.innerHTML =
        "💐 Untuk Gabriela...";

    /* munculkan buket */
    bouquet.classList.add("show");

    /* love bertebaran */
    createHearts(35);

    /* nama muncul setelah bunga mekar */
    setTimeout(function () {

        gabriela.classList.add("show");

    }, 1800);
});


/* TUTUP SURAT */

closeButton.addEventListener("click", function () {

    letterScreen.classList.remove("show");

});


/* LOVE */

function createHearts(jumlah) {

    for (let i = 0; i < jumlah; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        const jenisLove = [
            "❤️",
            "💕",
            "💗",
            "💖"
        ];

        heart.innerHTML =
            jenisLove[
                Math.floor(
                    Math.random() *
                    jenisLove.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            Math.random() * 35 + "%";

        heart.style.animationDelay =
            Math.random() * .7 + "s";

        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 3200);
    }
}
