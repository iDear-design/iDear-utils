import {getUserAgent} from "@idear-tools/obtain";

// android终端
export default function isAndroid(): Boolean {
  let Android = getUserAgent().indexOf('Android') > -1 || getUserAgent().indexOf('Adr') > -1
  return Android
}

