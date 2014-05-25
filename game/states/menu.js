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

    var rows = [
        this.game.height * 1/8,
        this.game.height * 2/8,
        this.game.height * 3/8,
        this.game.height * 4/8,
        this.game.height * 5/8
    ];

    var cols = [
        this.game.width * 1/10,
        this.game.width * 2/10,
        this.game.width * 3/10,
        this.game.width * 4/10,
        this.game.width * 5/10,
        this.game.width * 6/10,
        this.game.width * 7/10,
        this.game.width * 8/10,
        this.game.width * 9/10
    ];

    console.dir(cols);

    this.game.add.existing(this.enemies);
    this.game.add.existing(this.bullets);

    for (var i = 0; i < cols.length; i++) {
        this.enemies.add(new alien(this.game, cols[i], rows[0], alien.A));
    }

    for (var i = 0; i < cols.length; i++) {
        this.enemies.add(new alien(this.game, cols[i], rows[1], alien.B));
    }

    for (var i = 0; i < cols.length; i++) {
        this.enemies.add(new alien(this.game, cols[i], rows[2], alien.C));
    }

    for (var i = 0; i < cols.length; i++) {
        this.enemies.add(new alien(this.game, cols[i], rows[3], alien.D));
    }

    this.player = new player(this.game, this.game.width / 2, this.game.height);
    this.game.add.existing(this.player);
  },

  update: function() {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.player.fire()) {
        this.bullets.add(new bullet(this.game, this.player.x, this.player.y - this.player.height, bullet.B));
      }

      this.game.physics.arcade.collide(this.bullets, this.enemies, function(bullet, enemy) {
        var exp = new explosion(this.game, enemy.x, enemy.y);
        exp.scale = enemy.scale;
        this.game.add.existing(exp);
        bullet.kill();
        enemy.kill();
      }, null,  this);
  }
};

module.exports = Menu;
