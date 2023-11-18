const showColors=require('./color')

test('showColors should print the array myColor using toString()', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    showColors();
    expect(consoleSpy).toHaveBeenCalledWith('Red,Green,White,Black');
  });
  
  test('showColors should print the array myColor using join()', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    showColors();
    expect(consoleSpy).toHaveBeenCalledWith('Red,Green,White,Black');
  });
  
  test('showColors should print the array myColor using join("")', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    showColors();
    expect(consoleSpy).toHaveBeenCalledWith('RedGreenWhiteBlack');
  });