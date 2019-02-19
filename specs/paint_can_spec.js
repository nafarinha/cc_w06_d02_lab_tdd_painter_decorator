const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint Can', function () {

  let paintCan

  beforeEach(function() {
    paintCan = new PaintCan(25)

  });

  it('should have a number of litres of paint', function () {
    const actual = paintCan.litres;
    const expected = 25;
    assert.strictEqual(actual, expected);
  });

  it('should check if it is empty', function() {
    const actual = paintCan.checkStatus();
    const expected = 'Paint can not empty.';
    assert.strictEqual(actual, expected);
  });

});
