/*
  Modeling a TV
  -------------
  state: brand, size, resolution, inputs, control
  behavior: turn on/off, change channel, increase/decrease volume, change input, change settings


  Notes: behavior is by using Prototypes. Prototypes is how you attach methods to Constructor.

  Prototypal inheritance is on the object, classical inheritance is on the class
*/


const Televation = function() {
  this.brand = brand;
  this.resolution = resolution;
  this.channel = channel;
  this.poweredOn = poweredOn;
  this.volumeLevel = volumeLevel;
}
