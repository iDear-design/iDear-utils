import {isArray} from "../../judge/dataType";

export default function createAudio(url) {
  const audioElm = document.createElement('audio');
  let source;
  if (isArray(url) && url.length > 0) {
    for (let i = 0; i < url.length; i++) {
      source = document.createElement('source');
      source.src = url[i];
      source.type = `audio/${(url[i]).match(/\\.([^\\\\.]+)$/)[1]}`;
      audioElm.appendChild(source);
    }
  } else {
    audioElm.src = url;
  }
  return audioElm;
}
