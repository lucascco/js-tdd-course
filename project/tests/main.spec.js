describe('Main', function() {
    describe('Method A', function() {
      context.skip('Case 1', function() {
        it('should ...', function() {
          throw new Error('an error here');
        });
      });
  
      context('Case 2', function() {

        it('should ...', function() {
          throw new Error('an error here');
          
        });


        it('should blablabla...', function() {
          throw new Error('an error here');
          
        });
  
      });
    });
});