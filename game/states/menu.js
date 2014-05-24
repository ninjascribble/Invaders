
'use strict';
function Menu() {}

Menu.prototype = {

  preload: function() {

  },

  create: function() {

    var zero = 24;
    var one = 24 * 2 + 104;
    var two = 24 * 3 + 104 * 2;
    var three = 24 * 4 + 104 * 3;

    this.enemy01_a = this.game.add.sprite(zero, zero, 'sprites');
    this.enemy01_a.frameName = 'enemy01_a';
    this.enemy01_a.anchor.setTo(0, 0);
    this.enemy01_a.scale.x = 1;
    this.enemy01_a.scale.y = 1;

    this.enemy01_b = this.game.add.sprite(one, zero, 'sprites');
    this.enemy01_b.frameName = 'enemy01_b';
    this.enemy01_b.anchor.setTo(0, 0);
    this.enemy01_b.scale.x = 1;
    this.enemy01_b.scale.y = 1;

    this.enemy02_a = this.game.add.sprite(two, zero, 'sprites');
    this.enemy02_a.frameName = 'enemy02_a';
    this.enemy02_a.anchor.setTo(0, 0);
    this.enemy02_a.scale.x = 1;
    this.enemy02_a.scale.y = 1;

    this.enemy02_b = this.game.add.sprite(three, zero, 'sprites');
    this.enemy02_b.frameName = 'enemy02_b';
    this.enemy02_b.anchor.setTo(0, 0);
    this.enemy02_b.scale.x = 1;
    this.enemy02_b.scale.y = 1;

    this.enemy03_a = this.game.add.sprite(zero, one, 'sprites');
    this.enemy03_a.frameName = 'enemy03_a';
    this.enemy03_a.anchor.setTo(0, 0);
    this.enemy03_a.scale.x = 1;
    this.enemy03_a.scale.y = 1;

    this.enemy03_b = this.game.add.sprite(one, one, 'sprites');
    this.enemy03_b.frameName = 'enemy03_b';
    this.enemy03_b.anchor.setTo(0, 0);
    this.enemy03_b.scale.x = 1;
    this.enemy03_b.scale.y = 1;

    this.enemy04_a = this.game.add.sprite(two, one, 'sprites');
    this.enemy04_a.frameName = 'enemy04_a';
    this.enemy04_a.anchor.setTo(0, 0);
    this.enemy04_a.scale.x = 1;
    this.enemy04_a.scale.y = 1;

    this.enemy04_b = this.game.add.sprite(three, one, 'sprites');
    this.enemy04_b.frameName = 'enemy04_b';
    this.enemy04_b.anchor.setTo(0, 0);
    this.enemy04_b.scale.x = 1;
    this.enemy04_b.scale.y = 1;

    this.explosion_a = this.game.add.sprite(zero, two, 'sprites');
    this.explosion_a.frameName = 'explosion_a';
    this.explosion_a.anchor.setTo(0, 0);
    this.explosion_a.scale.x = 1;
    this.explosion_a.scale.y = 1;

    this.explosion_b = this.game.add.sprite(one, two, 'sprites');
    this.explosion_b.frameName = 'explosion_b';
    this.explosion_b.anchor.setTo(0, 0);
    this.explosion_b.scale.x = 1;
    this.explosion_b.scale.y = 1;

    this.player = this.game.add.sprite(two, two, 'sprites');
    this.player.frameName = 'player';
    this.player.anchor.setTo(0, 0);
    this.player.scale.x = 1;
    this.player.scale.y = 1;

    this.shot01_a = this.game.add.sprite(0 / 7 * one + three, two, 'sprites');
    this.shot01_a.frameName = 'shot01_a';
    this.shot01_a.anchor.setTo(0, 0);
    this.shot01_a.scale.x = 1;
    this.shot01_a.scale.y = 1;

    this.shot02_a = this.game.add.sprite(1 / 7 * one + three, two, 'sprites');
    this.shot02_a.frameName = 'shot02_a';
    this.shot02_a.anchor.setTo(0, 0);
    this.shot02_a.scale.x = 1;
    this.shot02_a.scale.y = 1;

    this.shot03_a = this.game.add.sprite(2 / 7 * one + three, two, 'sprites');
    this.shot03_a.frameName = 'shot03_a';
    this.shot03_a.anchor.setTo(0, 0);
    this.shot03_a.scale.x = 1;
    this.shot03_a.scale.y = 1;

    this.shot04_a = this.game.add.sprite(3 / 7 * one + three, two, 'sprites');
    this.shot04_a.frameName = 'shot04_a';
    this.shot04_a.anchor.setTo(0, 0);
    this.shot04_a.scale.x = 1;
    this.shot04_a.scale.y = 1;

    this.shot05_a = this.game.add.sprite(4 / 7 * one + three, two, 'sprites');
    this.shot05_a.frameName = 'shot05_a';
    this.shot05_a.anchor.setTo(0, 0);
    this.shot05_a.scale.x = 1;
    this.shot05_a.scale.y = 1;

    this.shot06_a = this.game.add.sprite(5 / 7 * one + three, two, 'sprites');
    this.shot06_a.frameName = 'shot06_a';
    this.shot06_a.anchor.setTo(0, 0);
    this.shot06_a.scale.x = 1;
    this.shot06_a.scale.y = 1;

    this.shot01_b = this.game.add.sprite(0 / 7 * one + three, 1 / 6 * one + two, 'sprites');
    this.shot01_b.frameName = 'shot01_b';
    this.shot01_b.anchor.setTo(0, 0);
    this.shot01_b.scale.x = 1;
    this.shot01_b.scale.y = 1;

    this.shot02_b = this.game.add.sprite(1 / 7 * one + three, 1 / 6 * one + two, 'sprites');
    this.shot02_b.frameName = 'shot02_b';
    this.shot02_b.anchor.setTo(0, 0);
    this.shot02_b.scale.x = 1;
    this.shot02_b.scale.y = 1;

    this.shot03_b = this.game.add.sprite(2 / 7 * one + three, 1 / 6 * one + two, 'sprites');
    this.shot03_b.frameName = 'shot03_b';
    this.shot03_b.anchor.setTo(0, 0);
    this.shot03_b.scale.x = 1;
    this.shot03_b.scale.y = 1;

    this.shot04_b = this.game.add.sprite(3 / 7 * one + three, 1 / 6 * one + two, 'sprites');
    this.shot04_b.frameName = 'shot04_b';
    this.shot04_b.anchor.setTo(0, 0);
    this.shot04_b.scale.x = 1;
    this.shot04_b.scale.y = 1;

    this.shot05_b = this.game.add.sprite(4 / 7 * one + three, 1 / 6 * one + two, 'sprites');
    this.shot05_b.frameName = 'shot05_b';
    this.shot05_b.anchor.setTo(0, 0);
    this.shot05_b.scale.x = 1;
    this.shot05_b.scale.y = 1;

    this.shot06_b = this.game.add.sprite(5 / 7 * one + three, 1 / 6 * one + two, 'sprites');
    this.shot06_b.frameName = 'shot06_b';
    this.shot06_b.anchor.setTo(0, 0);
    this.shot06_b.scale.x = 1;
    this.shot06_b.scale.y = 1;
  },

  update: function() {

  }
};

module.exports = Menu;
