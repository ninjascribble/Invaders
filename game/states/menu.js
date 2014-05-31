'use strict';

var player = require('../prefabs/player');
var alien = require('../prefabs/alien');
var bullet = require('../prefabs/bullet');
var explosion = require('../prefabs/explosion');
var group = require('../groups/group');

function Menu() {
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
        this.game.height * 1/16,
        this.game.height * 2/16,
        this.game.height * 3/16,
        this.game.height * 4/16,
        this.game.height * 5/16,
        this.game.height * 6/16,
        this.game.height * 7/16,
        this.game.height * 8/16,
        this.game.height * 9/16
    ];

    var cols = [
        this.game.width *  2/18,
        this.game.width *  3/18,
        this.game.width *  4/18,
        this.game.width *  5/18,
        this.game.width *  6/18,
        this.game.width *  7/18,
        this.game.width *  8/18,
        this.game.width *  9/18,
        this.game.width * 10/18,
        this.game.width * 11/18,
        this.game.width * 12/18,
        this.game.width * 13/18,
        this.game.width * 14/18,
        this.game.width * 15/18,
        this.game.width * 16/18
    ];

    this.player = new player(this.game);
    this.player.x = this.game.width / 2;
    this.player.y = this.game.height;
    this.game.add.existing(this.player);

    this.enemies = new group(this.game);
    this.enemies.classType = alien;
    this.game.add.existing(this.enemies);

    this.bullets = new group(this.game);
    this.bullets.classType = bullet;
    this.game.add.existing(this.bullets);

    this.explosions = new group(this.game);
    this.explosions.classType = explosion;
    this.game.add.existing(this.explosions);

    for (var i = 0; i < cols.length; i++) {
        this.enemies.spawn(cols[i], rows[0]).setType(alien.A);
        this.enemies.spawn(cols[i], rows[1]).setType(alien.B);
        this.enemies.spawn(cols[i], rows[2]).setType(alien.C);
        this.enemies.spawn(cols[i], rows[3]).setType(alien.D);
        this.enemies.spawn(cols[i], rows[4]).setType(alien.A);
        this.enemies.spawn(cols[i], rows[5]).setType(alien.B);
        this.enemies.spawn(cols[i], rows[6]).setType(alien.C);
        this.enemies.spawn(cols[i], rows[7]).setType(alien.D);
    }
  },

  update: function() {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.player.fire()) {
        this.bullets.spawn(this.player.x, this.player.y - this.player.height).setType(bullet.B);
      }

      this.game.physics.arcade.collide(this.bullets, this.enemies, this.onBulletHitsEnemy, null,  this);
  },

  onBulletHitsEnemy: function(bullet, enemy) {
    this.explosions.spawn(enemy.x, enemy.y);
    bullet.kill();
    enemy.kill();
  }
};

module.exports = Menu;
