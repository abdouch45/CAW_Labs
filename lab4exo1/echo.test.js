const exf = require('./echo');

test('exf should log input string r times', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  exf('Hello', 3);
  expect(consoleSpy).toHaveBeenCalledTimes(3);
  expect(consoleSpy).toHaveBeenCalledWith('Hello');
});