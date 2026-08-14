function openSurprise() {

    // Hide welcome screen
    document.getElementById("welcome").style.display = "none";

    // Show birthday screen
    document.getElementById("birthday").classList.remove("hidden");

    // Start effects
    createHearts();

    createConfetti();
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    const container =
        document.querySelector(".hearts");

    const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "🌸",
        "✨"
    ];


    setInterval(function () {

        const heart =
            document.createElement("span");

        heart.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";


        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";


        container.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 8000);

    }, 400);
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const canvas =
        document.getElementById("confetti");

    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const pieces = [];


    for (let i = 0; i < 150; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y:
                Math.random() *
                -canvas.height,

            size:
                4 + Math.random() * 7,

            speed:
                2 + Math.random() * 4,

            rotation:
                Math.random() * 360,

            rotationSpeed:
                Math.random() * 5,

            color:
                [
                    "#ff5c9a",
                    "#ffd166",
                    "#ffffff",
                    "#c9a7ff"
                ][
                    Math.floor(
                        Math.random() * 4
                    )
                ]

        });

    }


    let frame = 0;


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(function (piece) {

            piece.y += piece.speed;

            piece.rotation +=
                piece.rotationSpeed;


            ctx.save();


            ctx.translate(
                piece.x,
                piece.y
            );


            ctx.rotate(
                piece.rotation *
                Math.PI /
                180
            );


            ctx.fillStyle =
                piece.color;


            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size * 2
            );


            ctx.restore();

        });


        frame++;


        if (frame < 300) {

            requestAnimationFrame(
                animate
            );

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }


    animate();
}


/* =========================
   RESPONSIVE CANVAS
========================= */

window.addEventListener(
    "resize",
    function () {

        const canvas =
            document.getElementById("confetti");

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }
);