document.addEventListener("DOMContentLoaded", function () {

    const heartButton =
        document.getElementById("heartButton");

    const flowers =
        document.getElementById("flowers");

    const envelopeBox =
        document.getElementById("envelopeBox");

    const envelope =
        document.getElementById("envelope");

    const letterOverlay =
        document.getElementById("letterOverlay");

    const closeLetter =
        document.getElementById("closeLetter");

    const surpriseButton =
        document.getElementById("surpriseButton");

    const bouquet =
        document.getElementById("bouquet");

    const gabriela =
        document.getElementById("gabriela");


    /* =========================
       1. KLIK HATI
    ========================= */

    heartButton.addEventListener("click", function () {

        console.log("Hati berhasil diklik");

        // bunga muncul
        flowers.classList.add("show");

        // love beterbangan
        createHearts(25);

        // hati mengecil
        heartButton.style.transform =
            "scale(0)";

        heartButton.style.opacity =
            "0";

        // amplop muncul
        setTimeout(function () {

            envelopeBox.classList.add("show");

        }, 1200);

    });


    /* =========================
       2. KLIK AMPLOP
    ========================= */

    envelope.addEventListener("click", function () {

        console.log("Amplop berhasil diklik");

        letterOverlay.classList.add("show");

        createHearts(20);

    });


    /* =========================
       3. TUTUP SURAT
    ========================= */

    closeLetter.addEventListener("click", function () {

        letterOverlay.classList.remove("show");

    });


    /* =========================
       4. KLIK KEJUTAN
    ========================= */

    surpriseButton.addEventListener("click", function () {

        console.log("Kejutan berhasil diklik");

        surpriseButton.disabled = true;

        surpriseButton.innerHTML =
            "💐 Untuk Gabriela...";


        // buket muncul
        bouquet.classList.add("show");


        // banyak love
        createHearts(45);


        // nama muncul setelah bunga
        setTimeout(function () {

            gabriela.classList.add("show");

        }, 1800);

    });


    /* =========================
       5. LOVE
    ========================= */

    function createHearts(jumlah) {

        const heartTypes = [
            "❤️",
            "💕",
            "💗",
            "💖"
        ];


        for (
            let i = 0;
            i < jumlah;
            i++
        ) {

            const heart =
                document.createElement("div");


            heart.className =
                "floating-heart";


            heart.innerHTML =
                heartTypes[
                    Math.floor(
                        Math.random() *
                        heartTypes.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.bottom =
                Math.random() * 30 + "vh";


            heart.style.fontSize =
                (
                    18 +
                    Math.random() * 25
                ) + "px";


            heart.style.animationDelay =
                (
                    Math.random() * .8
                ) + "s";


            document.body.appendChild(
                heart
            );


            setTimeout(function () {

                heart.remove();

            }, 3500);

        }

    }

});
