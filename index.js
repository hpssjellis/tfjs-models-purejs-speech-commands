/* globals speechCommands */
let recognizer;
let messageArea;

const MESSAGES = {
  'up': '👍',
  'down': '🙃',
  'left': '👈',
  'right': '➡️',
}

async function startListening(options, onResult) {
  const {vocabulary, probabilityThreshold} = options;
  
  document.getElementById('start').disabled = true;
  
  
  recognizer = speechCommands.create('BROWSER_FFT', vocabulary);
  await recognizer.ensureModelLoaded();
  document.getElementById('container').classList.remove('before-load');
  const words = recognizer.wordLabels();  
  
  recognizer.listen(result => {    
    const maxScore = Math.max(...result.scores);    
    const maxScoreIndex = result.scores.indexOf(maxScore);    
    const detectedWord = words[maxScoreIndex];    
    
    // Don't trigger on background noise or unknown.
    if (maxScore > probabilityThreshold && maxScoreIndex < 4) {
      onResult({
        detectedWord,
        detectedWordScore: maxScore,
        scores: Array.from(result.scores),
      });
    }
  });
  
  document.getElementById('stop').disabled = false;
}

async function stopListening() {
  if (recognizer!= null) {
    recognizer.stopListening()
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
    messageArea.class = '';
  }
}

function onDetection(detectionResult) {
  console.log('ondetection', detectionResult);
  const { detectedWord } = detectionResult;
  messageArea.innerHTML = MESSAGES[detectedWord];
  messageArea.className = detectedWord;
}

function setupListeners() {
  const recognizerOptions = {
    vocabulary: 'directional4w',
    probabilityThreshold: 0.85,
  };
  
  document.getElementById('start').addEventListener('click', () => {
    startListening(recognizerOptions, onDetection);
  });
  
  document.getElementById('stop').addEventListener('click', stopListening);
    
  messageArea = document.getElementById('last-detected');
}

document.addEventListener("DOMContentLoaded", function() {
  setupListeners();
});
