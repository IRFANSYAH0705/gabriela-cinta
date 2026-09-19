document.addEventListener("DOMContentLoaded", function () {

    const heartButton =
        document.getElementById("heartButton");

    const bottomFlowers =
        document.getElementById("bottomFlowers");

    const envelopeBox =
        document.getElementById("envelopeBox");

    const envelope =
        document.getElementById("envelope");

    const letterOverlay =
        document.getElementById("letterOverlay");

    const closeButton =
        document.getElementById("closeButton");

    const surpriseButton =
        document.getElementById("surpriseButton");

    const bouquet =
        document.getElementById("bouquet");

    const gabriela =
        document.getElementById("gabriela");


    /* =========================
       KLIK HATI
    ========================= */

    heartButton.addEventListener(
        "click",
        function () {

            /* bunga muncul */
            bottomFlowers.classList.add(
                "show"
            );


            /* love */
            createHearts(20);


            /* hati mengecil */
            heartButton.style.transform =
                "scale(0)";

            heartButton.style.opacity =
                "0";


            /* amplop muncul */
            setTimeout(
                function () {

                    envelopeBox.classList.add(
                        "show"
                    );

                },
                1500
            );

        }
    );


    /* =========================
       KLIK AMPLOP
    ========================= */

    envelope.addEventListener(
        "click",
        function () {

            letterOverlay.classList.add(
                "show"
            );


            createHearts(25);

        }
    );


    /* =========================
       KLIK KEJUTAN
    ========================= */

    surpriseButton.addEventListener(
        "click",
        function () {

            /* tombol hanya bisa sekali */
            surpriseButton.disabled =
                true;


            surpriseButton.textContent =
                "💐 Untuk Gabriela...";


            /* buket muncul */
            bouquet.classList.add(
                "show"
            );


            /* love */
            createHearts(40);


            /* nama muncul */
            setTimeout(
                function () {

                    gabriela.classList.add(
                        "show"
                    );

                },
                1900
            );

        }
    );


    /* =========================
       TUTUP SURAT
    ========================= */

    closeButton.addEventListener(
        "click",
        function () {

            letterOverlay.classList.remove(
                "show"
            );

        }
    );


    /* =========================
       LOVE
    ========================= */

    function createHearts(jumlah) {

        const hearts = [
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
                document.createElement(
                    "div"
                );


            heart.className =
                "floating-heart";


            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 +
                "%";


            heart.style.bottom =
                Math.random() * 35 +
                "%";


            heart.style.fontSize =
                (
                    16 +
                    Math.random() * 25
                ) +
                "px";


            heart.style.animationDelay =
                (
                    Math.random() * .7
                ) +
                "s";


            document.body.appendChild(
                heart
            );


            setTimeout(
                function () {

                    heart.remove();

                },
                3200
            );

        }
    }

});
