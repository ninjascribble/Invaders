'use strict';

var player = require('../prefabs/player');
var alien = require('../prefabs/alien');
var bullet = require('../prefabs/bullet');
var explosion = require('../prefabs/explosion');

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

      this.enemies = new Phaser.Group(this.game, null);
      this.enemies.classType = alien;
      this.enemies.createMultiple(40);

      this.bullets = new Phaser.Group(this.game, null);
      this.bullets.classType = bullet;
      this.bullets.createMultiple(20);

      this.explosions = new Phaser.Group(this.game, null);
      this.explosions.classType = explosion;
      this.explosions.createMultiple(20);
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

    this.game.add.existing(this.enemies);
    this.game.add.existing(this.bullets);
    this.game.add.existing(this.explosions);

    for (var i = 0; i < cols.length; i++) {
       this.enemies.getFirstDead().reset(cols[i], rows[0], 1, alien.A);
       this.enemies.getFirstDead().reset(cols[i], rows[1], 1, alien.B);
       this.enemies.getFirstDead().reset(cols[i], rows[2], 1, alien.C);
       this.enemies.getFirstDead().reset(cols[i], rows[3], 1, alien.D);
    }

    this.player = new player(this.game, this.game.width / 2, this.game.height);
    this.game.add.existing(this.player);
  },

  update: function() {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.player.fire()) {
        this.bullets.getFirstDead().reset(this.player.x, this.player.y - this.player.height, 1, bullet.B);
      }

      this.game.physics.arcade.collide(this.bullets, this.enemies, this.onBulletHitsEnemy, null,  this);
  },

  onBulletHitsEnemy: function(bullet, enemy) {
    this.explosions.getFirstDead().reset(enemy.x, enemy.y, 1);
    bullet.kill();
    enemy.kill();
  }
};

module.exports = Menu;
