let audioCtx;
let buffers = {};

export async function preloadSound(name, url) {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  buffers[name] = await audioCtx.decodeAudioData(arrayBuffer);
}

export function playSound(name) {
  if (!audioCtx || !buffers[name]) return;

  const source = audioCtx.createBufferSource();
  source.buffer = buffers[name];
  source.connect(audioCtx.destination);
  source.start(0);
}
