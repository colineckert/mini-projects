const textInput = document.querySelector('#text-input');
const form = document.querySelector('form');
const speechSynthesis = window.speechSynthesis;

const speakText = () => {
  const text = textInput.value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.lang = 'en-US';

  console.log(utterance, text, voiceSelect.value);

  speechSynthesis.speak(utterance);
};

form.onsubmit = (e) => {
  e.preventDefault();
  speakText();
};

speechSynthesis.addEventListener('error', (e) => {
  console.error(e);
});
