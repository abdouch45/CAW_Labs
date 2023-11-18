  const chunk = require('./chunk');
describe("test of chunk function", () => {
    test('testing function chunk', () => {
      expect(chunk([0,2,4],1)).toEqual([[0],[2],[4]]);
    });
   })