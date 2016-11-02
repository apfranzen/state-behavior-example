/*
  Modeling a TV
  -------------
  state: brand, size, resolution, inputs, control
  behavior: turn on/off, change channel, increase/decrease volume, change input, change settings


  Notes: behavior is by using Prototypes. Prototypes is how you attach methods to Constructor.

  Prototypal inheritance is on the object, classical inheritance is on the class
*/


const television = function(brand, resolution, channel. poweredOn, volumeLevel) {
  this.brand = brand;
  this.resolution = resolution;
  this.channel = channel;
  this.poweredOn = poweredOn;
  this.volumeLevel = volumeLevel;
};

Television.prototype.power = function() {
  this.poweredOn = !this.poweredOn
};

Television.prototype.changeVolume = function(level) {
  if (level === 'up') {
    this.volumeLevel++;
  } else {
    this.volumeLevel--;
  }
};

Television.prototype.destroy = function() {
  this.isDestroyed = true;
};

const leftTelevision = new Television('Vizio', '1920x1080', 'herman', true, 8);
const rightTelevision = new Television('Vizio', '1920x1080', 'wes', true, 9999);

rightTelevision.changeVolume('down');
rightTelevision.changeVolume('down');
rightTelevision.changeVolume('down');
rightTelevision.changeVolume('down');
rightTelevision.changeVolume('down');
rightTelevision.changeVolume('down');
leftTelevision.destroy();
