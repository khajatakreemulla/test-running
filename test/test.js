const { expect } = require('chai');

// Example function to test
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

describe('Math Functions', function() {
    describe('add()', function() {
        it('should add two numbers correctly', function() {
            expect(add(1, 2)).to.equal(3);
            expect(add(-1, 2)).to.equal(1);
            expect(add(-1, -2)).to.equal(-3);
        });
    });

    describe('subtract()', function() {
        it('should subtract two numbers correctly', function() {
            expect(subtract(2, 1)).to.equal(1);
            expect(subtract(-1, 2)).to.equal(-3);
            expect(subtract(-2, -1)).to.equal(-1);
        });
    });
});
