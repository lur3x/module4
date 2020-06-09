(function () {
  const byeSpeaker = {
    speakWord: 'Good Bye',
    speak(name) {
      console.log(this.speakWord + ' ' + name);
    }
  };

  window.byeSpeaker = byeSpeaker;
})();
