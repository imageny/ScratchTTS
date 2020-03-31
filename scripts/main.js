function generate() {
  var voice = document.getElementById('voice').value;
  var words = document.getElementById('words').value;
  
  var ttsAudio = document.getElementById('ttsAudio');
  var tts = document.getElementById('ttsAudio');
  tts.src = '/tts.php?voice=' + voice + '&query=' + words;

  ttsAudio.load();
  ttsAudio.play();
}