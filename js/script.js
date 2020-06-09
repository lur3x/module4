(function () {
  const names = [
    'Yaakov',
    'John',
    'Jen',
    'Jason',
    'Paul',
    'Frank',
    'Larry',
    'Paula',
    'Laura',
    'Jim'
  ];

  for (const item of names) {
    if (item[0].toLowerCase() === 'j') {
      byeSpeaker.speak(item);
    } else {
      helloSpeaker.speak(item);
    }
  }
})();
