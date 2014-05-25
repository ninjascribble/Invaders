'use strict';

var KEY = 'sprites';

var Alien = function(game, x, y, type) {

    Phaser.Sprite.call(this, game, x, y, KEY);

    this.game.physics.arcade.enableBody(this);

    this.type = type || Alien.A;
    this.animations.add('normal', this.type, 2, true);
    this.animations.play('normal');
};

Alien.prototype = Object.create(Phaser.Sprite.prototype);
Alien.prototype.constructor = Alien;
module.exports = Alien;

Alien.A = ['enemy01_a', 'enemy01_b'];
Alien.B = ['enemy03_a', 'enemy03_b'];
Alien.C = ['enemy04_a', 'enemy04_b'];
Alien.D = ['enemy02_a', 'enemy02_b'];

Alien.prototype.update = function() {

};

