'use strict';

var player = require('../prefabs/player');
var alien = require('../prefabs/alien');
var bullet = require('../prefabs/bullet');
var explosion = require('../prefabs/explosion');

function Menu() {
    this.enemies = new Phaser.Group(this.game, null);
    this.bullets = new Phaser.Group(this.game, null);
}

Menu.prototype = {

  preload: function() {

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.input.keyboard.addKeyCapture([
          Phaser.Keyboard.LEFT,
          Phaser.Keyboard.RIGHT,
          Phaser.Keyboard.SPACEBAR
      ]);
  },

  create: function() {

    var zero = this.game.width * 1/5;
    var one = this.game.width * 2/5;
    var two = this.game.width * 3/5;
    var three = this.game.width * 4/5;

    this.game.add.existing(this.enemies);
    this.game.add.existing(this.bullets);

    this.enemies.add(new alien(this.game, zero, zero, alien.A));
    this.enemies.add(new alien(this.game, one, zero, alien.B));
    this.enemies.add(new alien(this.game, two, zero, alien.C));
    this.enemies.add(new alien(this.game, three, zero, alien.D));

    this.player = new player(this.game, this.game.width / 2, two);
    this.game.add.existing(this.player);
  },

  update: function() {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.player.fire()) {
        this.bullets.add(new bullet(this.game, this.player.x, this.player.y - this.player.height, bullet.B));
      }

      this.game.physics.arcade.collide(this.bullets, this.enemies, function(sp1, sp2) {
        this.game.add.existing(new explosion(this.game, sp2.x, sp2.y));
        sp1.kill();
        sp2.kill();
      }, null,  this);
  }
};

module.exports = Menu;
