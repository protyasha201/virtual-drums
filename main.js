// const getCrash = document.getElementById("crash-cymbal");
// getCrash.addEventListener("click", () => {
//     const playAudio = document.getElementById("play-crash");
//     playAudio.play();
// })

// const getRide = document.getElementById("ride-cymbal");
// getRide.addEventListener("click", () => {
//     const playAudio = document.getElementById("play-ride");
//     playAudio.play();
// })

play("crash-cymbal", "play-crash");
play("ride-cymbal", "play-ride");
play("hi-hat", "play-hi");
play("snare-drums", "play-snare");
play("open-hat", "play-open");
play("kick", "play-kick");

function play(kitItem, playItem) {
    const getRide = document.getElementById(kitItem);
    getRide.addEventListener("click", () => {
        const playAudio = document.getElementById(playItem);
        playAudio.play();
    })
}