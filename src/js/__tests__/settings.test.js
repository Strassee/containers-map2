import Settings from '../classes/Settings';

test('set user settings', () => {
  const setting = new Settings();
  setting.setusersettings('theme', 'light');
  const result = new Map([['theme', 'light']]);
  expect(setting.usersettings).toEqual(result);
});

test('get user settings', () => {
  const setting = new Settings();
  setting.setusersettings('theme', 'light');
  setting.setusersettings('difficulty', 'normal');
  const result = new Map([['theme', 'light'], ['music', 'trance'], ['difficulty', 'normal']]);
  expect(setting.getusersettings()).toEqual(result);
});

test('set unknown user settings', () => {
  expect(() => {
    const setting = new Settings();
    setting.setusersettings('theme', 'light1');
  }).toThrow();
});
