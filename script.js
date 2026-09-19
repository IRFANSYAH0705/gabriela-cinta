const heartButton =
    document.getElementById("heartButton");

const groundFlowers =
    document.getElementById("groundFlowers");

const envelopeSection =
    document.getElementById("envelopeSection");

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

const name =
    document.getElementById("name");


/* =========================
   KLIK HATI
========================= */

heartButton.addEventListener(
    "click",
    function () {

        /* bunga bawah muncul */
        groundFlowers.classList.add("show");

        /* love */
        createHearts(15);

        /* hati menghilang */
        heartButton.style.transform =
            "scale(0)";

        heartButton.style.opacity =
            "0";


        /* amplop muncul */
        setTimeout(
            function () {

                envelopeSection.classList.add(
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

        createHearts(20);

    }
);


/* =========================
   KLIK KEJUTAN
========================= */

surpriseButton.addEventListener(
    "click",
    function () {

        /* cegah klik berulang */
        surpriseButton.disabled = true;

        surpriseButton.textContent =
            "💐 Untuk Gabriela...";


        /* buket muncul */
        bouquet.classList.add(
            "show"
        );


        /* love */
        createHearts(35);


        /* nama muncul setelah bunga */
        setTimeout(
            function () {

                name.classList.add(
                    "show"
                );

            },
            1800
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

    const love = [
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
            love[
                Math.floor(
                    Math.random() *
                    love.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            Math.random() * 35 + "%";


        heart.style.fontSize =
            (
                16 +
                Math.random() * 25
            ) + "px";


        heart.style.animationDelay =
            (
                Math.random() * .8
            ) + "s";


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
