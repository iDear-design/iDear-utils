import {isArray} from "../../judge/dataType";
import {DOC} from "../../_base/system";

export default function createAudio(url) {
  const audioElm = DOC.createElement('audio');
  let source;
  if (isArray(url) && url.length > 0) {
    for (let i = 0; i < url.length; i++) {
      source = DOC.createElement('source');
      source.src = url[i];
      source.type = `audio/${(url[i]).match(/\\.([^\\\\.]+)$/)[1]}`;
      audioElm.appendChild(source);
    }
  } else {
    audioElm.src = url;
  }
  return audioElm;
}
