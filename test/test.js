var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 24 for Fact(4)', function() {
        assert.strictEqual(main.factorial(4), 24);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 0);
      assert.strictEqual(main.factorial(1), 1);
    });
});

describe('Negative numbers cannot have a factorial', function() {
  it('should return undefined for negative values', function() {
      assert.strictEqual(main.factorial(-3), undefined);
    });
});