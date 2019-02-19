const PaintCan = function (litres) {
  this.litres = litres;
};
//not working
PaintCan.prototype.checkStatus = function() {
  if (this.litres > 0) {
    console.log('Paint can not empty.');
  }
    else {
      console.log('Paint can empty.');
    }

};

module.exports = PaintCan;
