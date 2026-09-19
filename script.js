document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENT
    ========================== */

    const home =
        document.getElementById("home");

    const heartButton =
        document.getElementById("heartButton");

    const envelopeScene =
        document.getElementById("envelopeScene");

    const envelopeButton =
        document.getElementById("envelopeButton");

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
    ========================== */

    heartButton.addEventListener(
        "click",
        function () {

            /* love muncul */
            createHearts(25);


            /* halaman utama menghilang */
            home.classList.add("hide");


            /* amplop muncul */
            setTimeout(
                function () {

                    envelopeScene.classList.add(
                        "show"
                    );

                },
                700
            );

        }
    );


    /* =========================
       KLIK AMPLOP
    ========================== */

    envelopeButton.addEventListener(
        "click",
        function () {

            createHearts(20);

            letterOverlay.classList.add(
                "show"
            );

        }
    );


    /* =========================
       TUTUP SURAT
    ========================== */

    closeButton.addEventListener(
        "click",
        function () {

            letterOverlay.classList.remove(
                "show"
            );

        }
    );


    /* =========================
       KEJUTAN
    ========================== */

    surpriseButton.addEventListener(
        "click",
        function () {

            /* cegah klik berkali-kali */
            surpriseButton.disabled = true;


            /* ubah tulisan */
            surpriseButton.innerHTML =
                "💐 Untuk Gabriela...";


            /* buket muncul */
            bouquet.classList.add(
                "show"
            );


            /* love */
            createHearts(45);


            /* nama muncul setelah bunga */
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
       LOVE PARTICLES
    ========================== */

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


            heart.innerHTML =
                hearts[
                    Math.floor(
                        Math.random()
                        * hearts.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 +
                "vw";


            heart.style.bottom =
                Math.random() * 30 +
                "vh";


            heart.style.fontSize =
                (
                    18 +
                    Math.random() * 24
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
                3500
            );

        }

    }

});
