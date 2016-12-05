import STATE_EVENTS from './constants/state-events';

import { BootstrapState } from './states/bootstrap-state';
import { LoadingState } from './states/loading-state';
import { ExampleState } from './states/example-state';

export class StateManager {
    game = null;

    constructor(game) {
        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    setupStates() {
        this.game.state.add('Bootstrap', BootstrapState);
        this.game.state.add('Loading', LoadingState);
        this.game.state.add('Example', ExampleState);
    }

    setupNativeListeners() {
        this.game.state.onStateChange.add((newState, oldState) => {
            console.debug('Enter to new state: %s', newState);
        });
    }

    setupListeners() {
        this.game.on(STATE_EVENTS.BOOTSTRAP_COMPLETED, () => {
            this.game.state.start('Loading');
        });

        this.game.on(STATE_EVENTS.LOADING_COMPLETED, () => {
            this.game.state.start('Example');
        });
    }

    start() {
        this.game.state.start('Bootstrap');
    }
}
