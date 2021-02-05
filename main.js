// const crashCymbal = document.getElementById("crash-cymbal");
// crashCymbal.addEventListener("click", () => {
//     const playCrash = document.getElementById("play-crash");
//     playCrash.play();
// })

playDrum("","");
function playDrum() {
    const crashCymbal = document.getElementById("crash-cymbal");
    crashCymbal.addEventListener("click", () => {
        const playCrash = document.getElementById("play-crash");
        playCrash.play();
    })

}