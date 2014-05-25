'use strict';

var KEY = 'sprites';

var Bullet = function(game, x, y, type) {

    Phaser.Sprite.call(this, game, x, y, KEY);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.game.physics.arcade.enableBody(this);
    this.type = type || Bullet.A;
    this.animations.add('normal', this.type, 10, true);
    this.animations.play('normal');
};

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;
module.exports = Bullet;

Bullet.A = ['shot03_a'];
Bullet.B = ['shot06_a', 'shot03_a', 'shot01_a', 'shot04_a', 'shot05_a', 'shot02_a'];

Bullet.prototype.update = function() {

};
