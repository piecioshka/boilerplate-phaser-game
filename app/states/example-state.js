import GAME from '../constants/game';
import PLAYER from '../constants/player';
import STATE_EVENTS from '../constants/state-events';
import { Player } from '../models/player';

export class ExampleState extends Phaser.State {
    map = null;
    layer = null;

    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = GAME.GRAVITY;

        this.map = this.add.tilemap('example-map');
        this.map.addTilesetImage('background');
        this.map.setCollision([1]);

        this.layer = this.map.createLayer('Example Map');
        this.layer.resizeWorld();
        // this.layer.debug = true;

        this.game.player = new Player(this.game, PLAYER.DEFAULT_X, PLAYER.DEFAULT_Y);
        this.game.trigger(STATE_EVENTS.EXAMPLE_COMPLETED);
    }

    update() {
        this.physics.arcade.collide(this.game.player, this.layer);
    }

    render() {
        // this.game.debug.body(this.game.player);
    }
}
