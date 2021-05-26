import {DOC} from "../../_base/system";

export function getFavicon(setting) {
  let ic: Element = DOC.querySelectorAll('link[rel~=shortcut]')[0];
  if (!ic) {
    ic = changeFavicon('O', setting);
  }
  return ic;
}

export function changeFavicon(num, settings) {
  const head: Element = DOC.getElementsByTagName('head')[0];
  const linkTag: Element = DOC.createElement('link');
  const canvas: any = DOC.createElement('canvas');
  let ctx: any = null;

  canvas.height = 32;
  canvas.width = 32;
  ctx = canvas.getContext('2d');
  ctx.fillStyle = settings.backgroundColor;
  ctx.fillRect(0, 0, 32, 32);

  ctx.textAlign = 'center';
  ctx.font = '22px "helvetica", sans-serif';
  ctx.fillStyle = settings.textColor;
  num && ctx.fillText(num, 16, 24);

  // 生成到
  linkTag.setAttribute('rel', 'shortcut icon');
  linkTag.setAttribute('type', 'image/x-icon');
  linkTag.setAttribute('id', `new${settings.id}`);
  linkTag.setAttribute('href', canvas.toDataURL('image/png'));
  head.appendChild(linkTag);
  let iconURL: any = canvas.toDataURL('image/png');
  return iconURL
}
