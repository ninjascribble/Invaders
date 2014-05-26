'use strict';

var KEY = 'sprites';

var Explosion = function(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, KEY);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.scale.x = .5;
    this.scale.y = .5;
    this.type = Explosion.A;
    this.animations.add('normal', this.type, 10, false);
};

Explosion.prototype = Object.create(Phaser.Sprite.prototype);
Explosion.prototype.constructor = Explosion;
module.exports = Explosion;

Explosion.A = ['explosion_a', 'explosion_b'];

Explosion.prototype.reset = function(x, y, health) {
    Phaser.Sprite.prototype.reset.call(this, x, y, health);
    this.animations.play('normal');
    this.lifespan = 200;
};

