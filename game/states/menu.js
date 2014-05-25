'use strict';

var player = require('../prefabs/player');
var alien = require('../prefabs/alien');
var bullet = require('../prefabs/bullet');

function Menu() {}

Menu.prototype = {

  preload: function() {

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.input.keyboard.addKeyCapture([
          Phaser.Keyboard.LEFT,
          Phaser.Keyboard.RIGHT
      ]);
  },

  create: function() {

    var zero = this.game.width * 1/5;
    var one = this.game.width * 2/5;
    var two = this.game.width * 3/5;
    var three = this.game.width * 4/5;

    this.alien01 = new alien(this.game, zero, zero, alien.A);
    this.game.add.existing(this.alien01);

    this.alien02 = new alien(this.game, one, zero, alien.B);
    this.game.add.existing(this.alien02);

    this.alien03 = new alien(this.game, two, zero, alien.C);
    this.game.add.existing(this.alien03);

    this.alien04 = new alien(this.game, three, zero, alien.D);
    this.game.add.existing(this.alien04);

    this.player = new player(this.game, this.game.width / 2, two);
    this.game.add.existing(this.player);

    this.bullet = new bullet(this.game, one, one, bullet.A);
    this.game.add.existing(this.bullet);

    this.bullet = new bullet(this.game, two, one, bullet.B);
    this.game.add.existing(this.bullet);
  },

  update: function() {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();
  }
};

module.exports = Menu;
