import {changeFavicon, getFavicon} from "../../utils/notify/getFavicon";
import createAudio from "../../utils/notify/createAudio";
import {isNotification} from "../../utils/notify/notification";
import jsonArguments from "../../utils/notify/jsonArguments";

const defaultNotification: any = {
  title: '提示!',
  body: '您有一条新的消息...',
  openurl: '',
}

const repeatableEffects: string[] = ['flash', 'scroll'];

export default class browserNotify {
  public interval: number;
  public effect: string;
  public title: string;
  public message: string;
  public onclick: any;
  public openurl: any;
  public updateFavicon: any;
  public audio: any;
  public favicon: any;
  public cloneFavicon: any;
  public iconURL: any;
  public notification: any;

  // 未初始化
  public scrollTitle: string
  public audioElm: any
  public Notifiy: any
  public timer: any

  // 构造函数，初始化
  constructor(config) {
    this.interval = config.interval || 100; // 响应时长
    this.effect = config.effect || 'flash'; // 效果
    this.title = config.title || document.title; // 标题
    this.message = config.message || this.title; // 原来的标题
    this.onclick = config.onclick || this.onclick; // 点击事件
    this.openurl = config.openurl || this.openurl; // 点击事件
    this.updateFavicon = config.updateFavicon || {
      id: 'favicon',
      textColor: '#fff',
      backgroundColor: '#2F9A00',
    };
    this.audio = config.audio || '';
    this.favicon = getFavicon(this.updateFavicon);
    this.cloneFavicon = this.favicon.cloneNode(true);
    this.iconURL = (config.notification && config.notification.icon) ? config.notification.icon : (config.icon ? config.icon : this.favicon.href);
    defaultNotification.icon = this.iconURL;
    this.notification = config.notification || defaultNotification;
    // 初始化生成声音文件节点
    if (this.audio && this.audio.file) {
      this.setURL(this.audio.file);
    }
  }

  render() {
    if (this.effect === 'flash') {
      document.title = (this.title === document.title) ? this.message : this.title;
    } else if (this.effect === 'scroll') {
      const title = this.message || document.title;
      if (!this.scrollTitle || !this.scrollTitle.slice(1)) {
        document.title = title;
        this.scrollTitle = title;
      } else {
        this.scrollTitle = this.scrollTitle.slice(1);
        document.title = this.scrollTitle;
      }
    }
    return this;
  }

  // 设置标题
  setTitle(str) {
    if (str === true) {
      if (repeatableEffects.indexOf(this.effect) >= 0) {
        return this.addTimer();
      }
    } else if (str) {
      this.message = str;
      this.scrollTitle = '';
      this.addTimer();
    } else {
      this.clearTimer();
    }
    return this;
  }

  // 设置音频地址
  setURL(url?: any) {
    if (url) {
      if (this.audioElm) {
        this.audioElm.remove();
      }
      this.audioElm = createAudio(url);
      document.body.appendChild(this.audioElm);
    }
    return this;
  }

  loopPlay() {
    this.setURL();
    this.audioElm.loop = true;
    this.player();
    return this;
  }

  stopPlay() {
    this.audioElm && (this.audioElm.loop = false, this.audioElm.pause());
    return this;
  }

  // 播放声音
  player() {
    if (!this.audio || !this.audio.file) {
      return;
    }
    if (!this.audioElm) {
      this.audioElm = createAudio(this.audio.file);
      document.body.appendChild(this.audioElm);
    }
    this.audioElm.play();
    return this;
  }

  notify(json) {
    let nt = this.notification;
    const url = json.openurl ? json.openurl : this.openurl;
    const onclick = json.onclick ? json.onclick : this.onclick;
    if (window.Notification) {
      if (json) {
        nt = jsonArguments(json, nt);
      } else {
        nt = defaultNotification;
      }
      const option: any = {};
      option.icon = json.icon ? json.icon : this.iconURL;
      option.body = nt.body;
      if (json.dir) option.dir = json.dir;
      const n = new Notification(nt.title, option);
      n.onclick = () => {
        (onclick && typeof onclick === 'function') && onclick(n);
        url && window.open(url);
      };
      n.onshow = () => {
        (json.onshow && typeof json.onshow === 'function') && json.onshow(n);
      };
      n.onclose = () => {
        (json.onclose && typeof json.onclose === 'function') && json.onclose(n);
      };
      n.onerror = () => {
        (json.onerror && typeof json.onerror === 'function') && json.onerror(n);
      };
      this.Notifiy = n;
    }
    return this;
  }

  // 是否许可弹框通知
  isPermission() {
    return isNotification()
  }

  // 设置时间间隔
  setInterval(num) {
    if (num) {
      this.interval = num;
      this.addTimer();
    }
    return this;
  }

  // 设置网页Icon
  setFavicon(num) {
    if (!num && num !== 0) {
      return this.faviconClear();
    }
    const oldicon = document.getElementById(`new${this.updateFavicon.id}`);
    if (this.favicon) {
      this.favicon.remove();
    }
    if (oldicon) {
      oldicon.remove();
    }
    this.updateFavicon.num = num;
    this.iconURL = changeFavicon(num, this.updateFavicon);
    return this;
  }

  // 设置 Favicon 文字颜色
  setFaviconColor(color) {
    if (color) {
      this.faviconRemove();
      this.updateFavicon.textColor = color;
      this.iconURL = changeFavicon(this.updateFavicon.num, this.updateFavicon);
    }
    return this;
  }

  // 设置 Favicon 背景颜色
  setFaviconBackgroundColor(color) {
    if (color) {
      this.faviconRemove();
      this.updateFavicon.backgroundColor = color;
      this.iconURL = changeFavicon(this.updateFavicon.num, this.updateFavicon);
    }
    return this;
  }

  faviconRemove() {
    this.faviconClear();
    const oldicon = document.getElementById(`new${this.updateFavicon.id}`);
    if (this.favicon) {
      this.favicon.remove();
    }
    if (oldicon) {
      oldicon.remove();
    }
  }

  // 添加计数器
  addTimer() {
    this.clearTimer();
    if (repeatableEffects.indexOf(this.effect) >= 0) {
      this.timer = setInterval(this.render.bind(this), this.interval);
    }
    return this;
  }

  close() {
    if (this.Notifiy) this.Notifiy.close();
  }

  // 清除Icon
  faviconClear() {
    const newicon = document.getElementById(`new${this.updateFavicon.id}`);
    const head = document.getElementsByTagName('head')[0];
    const ficon = document.querySelectorAll('link[rel~=shortcut]');
    newicon && newicon.remove();
    if (ficon.length > 0) {
      for (let i = 0; i < ficon.length; i++) {
        ficon[i].remove();
      }
    }
    head.appendChild(this.cloneFavicon);
    this.iconURL = this.cloneFavicon.href;
    this.favicon = this.cloneFavicon;
    return this;
  }

  // 清除计数器
  clearTimer() {
    this.timer && clearInterval(this.timer);
    document.title = this.title;
    return this;
  }
}
