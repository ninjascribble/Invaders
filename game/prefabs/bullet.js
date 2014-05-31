'use strict';

var KEY = 'sprites';

var Bullet = function(game, x, y, type) {

    Phaser.Sprite.call(this, game, x, y, KEY);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.scale.x = .5;
    this.scale.y = .5;
    this.game.physics.arcade.enableBody(this);
    this.body.setSize(8, 16, 0, 0);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.smoothed = false;

    this.setType(type);
};

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;
module.exports = Bullet;

Bullet.A = ['shot03_a'];
Bullet.B = ['shot06_a', 'shot03_a', 'shot01_a', 'shot04_a', 'shot05_a', 'shot02_a'];

Bullet.prototype.reset = function(x, y, health, type) {
    Phaser.Sprite.prototype.reset.call(this, x, y, health);
    this.setType(type || this.type);
    this.body.velocity.y = -400;
};

Bullet.prototype.setType = function(value) {
    this.type = value || Bullet.A;
    this.animations.add('normal', this.type, 10, true);
    this.animations.play('normal');
};

