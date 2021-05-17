/**
 * @description toast弹窗
 * @params {String}  msg 弹窗内容
 * @returns {String}
 */
const toast = (msg) => {
  let tag = document.getElementById('iDear_Toast');
  // 校验：避免重复加载标签
  if (!tag) {
    tag = document.createElement('div');
    tag.setAttribute('id', 'iDear_Toast');
    tag.setAttribute('class', 'toastwp');
    document.body.appendChild(tag);
  }
  tag.innerHTML = `<span>${msg}</span>`;
  tag.style.display = 'block';
  setTimeout(() => {
    tag.style.display = 'none';
  }, 2000);
}

export default toast
