const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {

  let room;

  beforeEach( function () {
    room = new Room('100', false);
  });


  it('should start not painted', function () {
    const actual = room.painted;
    const expected = false;
    assert.strictEqual(actual, expected);
  });
});
