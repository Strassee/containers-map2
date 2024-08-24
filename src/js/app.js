import Settings from './classes/Settings';

const setting = new Settings();

setting.setusersettings('theme', 'light');
setting.setusersettings('music', 'chillout');
console.log(setting.getusersettings());
