export default class Settings {
  constructor() {
    this.theme = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];
    this.settings = new Map();
    this.usersettings = new Map();
    this.settings.set('theme', this.theme[0]);
    this.settings.set('music', this.music[0]);
    this.settings.set('difficulty', this.difficulty[0]);
  }

  setusersettings(setting, value) {
    if (Object.prototype.hasOwnProperty.call(this, setting) && eval(`this.${setting}.includes('${value}')`)) {
      this.usersettings.set(setting, value);
    } else {
      throw new Error('Unknown setting or value');
    }
  }

  getusersettings() {
    const result = new Map();
    [...this.settings.keys()].forEach((setting) => {
      result.set(setting, (this.usersettings.has(setting) ? this.usersettings.get(setting) : this.settings.get(setting)));
    });
    return result;
  }
}
