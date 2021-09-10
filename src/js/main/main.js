/** State Pattern **/

import {gameFinishState} from './main-game-state.js';
import {mainView} from './main-view.js';

const Main = function () {
    this.startButton = null;
    this.pauseButton = null;
    this.finishButton = null;
    // 設定初始狀態
    this.currentState = gameFinishState;
}

Main.prototype.changeState = function (newState) {
    this.currentState = newState;
}

Main.prototype.initMainGameView = function () {
    mainView.callAction('initControlButtonsDom');
    mainView.callAction('initCountdownDom');
    mainView.callAction('initTeamScoreDom');
    mainView.callAction('bindControlButtonEvent');
}

const mainGame = new Main();

mainGame.initMainGameView();

export {
    mainGame,
}
