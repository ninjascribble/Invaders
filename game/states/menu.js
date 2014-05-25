'use strict';

var player = require('../prefabs/player');
var alien = require('../prefabs/alien');

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

    var zero = 24;
    var one = 24 * 2 + 104;
    var two = 24 * 3 + 104 * 2;
    var three = 24 * 4 + 104 * 3;

    this.alien01 = new alien(this.game, zero, zero, alien.A);
    this.game.add.existing(this.alien01);

    this.alien02 = new alien(this.game, one, zero, alien.B);
    this.game.add.existing(this.alien02);

    this.alien03 = new alien(this.game, two, zero, alien.C);
    this.game.add.existing(this.alien03);

    this.alien04 = new alien(this.game, three, zero, alien.D);
    this.game.add.existing(this.alien04);

    this.player = new player(this.game, two, three);
    this.game.add.existing(this.player);
  },

  update: function() {

      this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.moveLeft();
      this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.moveRight();
  }
};

module.exports = Menu;
