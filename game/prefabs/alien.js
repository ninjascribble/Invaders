'use strict';

var KEY = 'sprites';

var Alien = function(game, x, y, type) {

    Phaser.Sprite.call(this, game, x, y, KEY);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.scale.x = .5;
    this.scale.y = .5;
    this.type = type || Alien.A;
    this.game.physics.arcade.enableBody(this);
    this.animations.add('normal', this.type, 2, true);
    this.animations.play('normal');
    this.body.immovable = true;
};

Alien.prototype = Object.create(Phaser.Sprite.prototype);
Alien.prototype.constructor = Alien;
module.exports = Alien;

Alien.A = ['enemy01_a', 'enemy01_b'];
Alien.B = ['enemy03_a', 'enemy03_b'];
Alien.C = ['enemy04_b', 'enemy04_a'];
Alien.D = ['enemy02_a', 'enemy02_b'];

Alien.prototype.update = function() {
};

