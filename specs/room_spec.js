const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {

  let room;

  beforeEach( function () {
    room = new Room(100, false);
  });


  it('should have a 100 sq m area', function () {
    const actual = room.area;
    const expected = 100;
    assert.strictEqual(actual, expected);
  });

  it('should start not painted', function () {
    const actual = room.painted;
    const expected = false;
    assert.strictEqual(actual, expected);
  });



//end of describe
});
