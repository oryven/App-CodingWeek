const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

playButton.addEventListener('click', function() {
    const textLength = textArea.value.trim().length;
    console.log(textLength);
    if (textLength > 0) {
        talk();
    }
});

function talk() {
    const text = textArea.value;
    const pitch = pitchBar.value;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = pitch;
    speechSynthesis.speak(utterance);
}
