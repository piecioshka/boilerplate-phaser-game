import { Game } from './game';
import { StateManager } from './state-manager';
import GAME from './constants/game';

const game = new Game(GAME.WIDTH, GAME.HEIGHT, 'app', Phaser.CANVAS);
const manager = new StateManager(game);
manager.start();
