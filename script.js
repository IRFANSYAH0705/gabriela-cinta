document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       ELEMENT
    ===================================== */

    const home =
        document.getElementById("home");

    const envelopePage =
        document.getElementById("envelopePage");

    const heartButton =
        document.getElementById("heartButton");

    const envelopeButton =
        document.getElementById("envelopeButton");

    const letterPage =
        document.getElementById("letterPage");

    const closeLetter =
        document.getElementById("closeLetter");

    const surpriseButton =
        document.getElementById("surpriseButton");

    const bouquet =
        document.getElementById("bouquet");

    const gabrielaName =
        document.getElementById("gabrielaName");


    /* =====================================
       KLIK HATI
    ===================================== */

    heartButton.addEventListener(
        "click",
        function () {

            createHearts(30);

            home.classList.remove("active");

            setTimeout(function () {

                envelopePage.classList.add(
                    "active"
                );

            }, 600);

        }
    );


    /* =====================================
       KLIK AMPLOP
    ===================================== */

    envelopeButton.addEventListener(
        "click",
        function () {

            createHearts(20);

            letterPage.classList.add(
                "show"
            );

        }
    );


    /* =====================================
       TUTUP SURAT
    ===================================== */

    closeLetter.addEventListener(
        "click",
        function () {

            letterPage.classList.remove(
                "show"
            );

        }
    );


    /* =====================================
       KEJUTAN
    ===================================== */

    surpriseButton.addEventListener(
        "click",
        function () {

            surpriseButton.disabled = true;

            surpriseButton.innerHTML =
                "💐 Untuk Gabriela ❤️";


            bouquet.classList.add(
                "show"
            );


            createHearts(50);


            setTimeout(
                function () {

                    gabrielaName.classList.add(
                        "show"
                    );

                },
                1800
            );

        }
    );


    /* =====================================
       LOVE PARTICLES
    ===================================== */

    function createHearts(jumlah) {

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💘"
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
                Math.random() * 35 +
                "vh";


            heart.style.fontSize =
                (
                    16 +
                    Math.random() * 22
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
