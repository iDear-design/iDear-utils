import {nav} from "@idear-tools/config";

function getIndexDB() {
  /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
  try {
    if (typeof indexedDB !== 'undefined') {
      return indexedDB;
    }
    // @ts-ignore
    if (typeof webkitIndexedDB !== 'undefined') {
      // @ts-ignore
      return webkitIndexedDB;
    }
    // @ts-ignore
    if (typeof mozIndexedDB !== 'undefined') {
      // @ts-ignore
      return mozIndexedDB;
    }
    // @ts-ignore
    if (typeof OIndexedDB !== 'undefined') {
      // @ts-ignore
      return OIndexedDB;
    }
    // @ts-ignore
    if (typeof msIndexedDB !== 'undefined') {
      // @ts-ignore
      return msIndexedDB;
    }
  } catch (e) {
    return;
  }
}

const getIDB = getIndexDB()

export default function isIndexDB() {
  try {
    if (!getIDB || !getIDB.open) return false;
    // @ts-ignore
    let isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(nav.userAgent) && !/Chrome/.test(nav.userAgent) && !/BlackBerry/.test(nav.platform)
    let hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1
    return ((!isSafari || hasFetch) && typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined')
  } catch (e) {
    return false;
  }
}
