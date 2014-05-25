'use strict';

var KEY = 'sprites';
var FRAME_NAME = 'player';

var Player = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, KEY, FRAME_NAME);
  this.game.physics.arcade.enableBody(this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
module.exports = Player;

Player.prototype.update = function() {
    this.body.velocity.x = this.game.physics.arcade.computeVelocity(1, this.body, this.body.velocity.x, 0, 2000, 450);
};

Player.prototype.moveLeft = function() {
    this.body.velocity.x -= 75;
};

Player.prototype.moveRight = function() {
    this.body.velocity.x += 75;
};