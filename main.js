playNow("crash-cymbal", "play-crash");
playNow("ride-cymbal", "play-ride");
playNow("tom-drums", "play-tom");
playNow("hi-hat", "play-hi");
playNow("snare-drums", "play-snare");
playNow("open-hat", "play-open");
playNow("kick", "play-kick");

function playNow(kitItem, playItem) {
    const getRide = document.getElementById(kitItem);
    getRide.addEventListener("mouseover", () => {
        const playAudio = document.getElementById(playItem);
        playAudio.play();
    })
}