(function () {
  const helloSpeaker = {
    speakWord: 'Hello',
    speak(name) {
      console.log(this.speakWord + ' ' + name);
    }
  };

  window.helloSpeaker = helloSpeaker;
})();
