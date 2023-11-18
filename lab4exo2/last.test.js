const last=require('./last')
tab=[];
  describe("test of last function", () => {
    test( "testing function test wich gets the last n elements of an array", () => {
      expect(last([0,2,4],2)).toEqual([2,4]);  });
  });

/* in the function we find a case where n==null array[array.length - 1]
   but this case is never satisfied since there is a case befor it n<=0 because null=<0
*/ 
 