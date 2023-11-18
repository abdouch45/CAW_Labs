const mean=require('./notation')
  describe("test of mean function", () => {
    test( "testing the mean of an array", () => {
        expect(mean([0,2,3,5])).toBe(2.5);    });
  });
  