# Speech Command Recognizer

The Speech Command Recognizer is a JavaScript module that enables
recognition of spoken commands comprised of simple isolated English
words from a small vocabulary. The default vocabulary includes the following
words: the ten digits from "zero" to "nine", "up", "down", "left", "right",
"go", "stop", "yes", "no", as well as the additional categories of
"unknown word" and "background noise".

It uses the web browser's
[WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).
It is built on top of [TensorFlow.js](https://js.tensorflow.org) and can
perform inference and transfer learning entirely in the browser, using
WebGL GPU acceleration.

The underlying deep neural network has been trained using the
[TensorFlow Speech Commands Dataset](https://www.tensorflow.org/tutorials/sequences/audio_recognition).

For more details on the data set, see:

Warden, P. (2018) "Speech commands: A dataset for limited-vocabulary
speech recognition" https://arxiv.org/pdf/1804.03209.pdf

Original github at https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

