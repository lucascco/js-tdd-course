describe.only('MochaHooks', function() {
    let arr;
    before(function() {
        console.log('before');
    });

    after(function() {
        console.log('after');
    });

    beforeEach(function() {
        arr = [1, 2, 3];
    });

    afterEach(function() {
        console.log('afterEach');
    });

    it('show have a size of 4 when push another value to the array', function(){
        arr.push(4)
        console.log(arr.length);
    });


    it('show have a size of 2 when pop from the the array', function(){
        arr.pop()
        console.log(arr.length);
    });

    it('show have a size of 2 when pop from the the array', function(){
        console.log(arr.pop() === 3);
    });

});