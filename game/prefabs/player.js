'use strict';

var KEY = 'sprites';
var FRAME_NAME = 'player';

var Player = function(game, x, y) {

  Phaser.Sprite.call(this, game, x, y, KEY, FRAME_NAME);

  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.game.physics.arcade.enableBody(this);
  this.body.collideWorldBounds = true;
  this.canFire = true;
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

Player.prototype.fire = function() {

    if (this.canFire == true) {
        this.canFire = false;
        this.game.time.events.add(250, function() {
            this.canFire = true;
        }, this);
        return true;
    }
    else {
        return false;
    }
};
