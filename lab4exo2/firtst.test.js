const first=require('./first')
tab=[];
  describe("test of first function", () => {
    test( "testing function test wich gets the first n elements of an array", () => {
      expect(first([0,2,4],2)).toEqual([0,2]);  });
  });
/* in the function we find a case where n==null return array[0]
   but this case is never satisfied since there is a case befor it n<=0 because null=<0
*/ 
