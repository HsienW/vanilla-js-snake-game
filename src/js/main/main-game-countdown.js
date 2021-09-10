import {mainGameMediator} from '../mediator/main-game-mediator.js';
import {teamMediator} from '../mediator/team-mediator.js';
import {mainView} from './main-view.js';

const mainGameCountdown = (function () {
    let activation = null;
    let startTime = null;
    let finishTime = null;
    let lastTimeStamp = null;
    let progress = null;
    const operations = {};

    operations.countdownLoop = function (timeStamp) {
        if (!startTime) {
            startTime = timeStamp;
        }
        lastTimeStamp = Math.floor((timeStamp - startTime) / 1000);
        progress = finishTime - lastTimeStamp;
        operations.isStart();
        operations.checkCountdownFinish();
        mainView.callAction('updateCountdownDom', progress);
    }

    operations.countdownInit = function (countdownFinishNumber) {
        startTime = null;
        lastTimeStamp = null;
        progress = null;
        finishTime = countdownFinishNumber;
    }

    operations.isStart = function () {
        activation = requestAnimationFrame(operations.countdownLoop.bind(this));
    }

    operations.isPause = function () {
        cancelAnimationFrame(activation);
    }

    operations.isFinish = function () {
        cancelAnimationFrame(activation);
    }

    operations.checkCountdownFinish = function () {
        if (progress === 0) {
            console.log('時間到');
            mainGameMediator.callAction('gameFinish');
            teamMediator.callAction('compareTeamTotalScore');
        }
    }

    const getData = function () {
        let action = Array.prototype.shift.call(arguments);
        return operations[action].apply(this);
    }

    const countdownAction = function () {
        let action = Array.prototype.shift.call(arguments);
        operations[action].apply(this, arguments);
    }

    return {
        getData: getData,
        countdownAction: countdownAction
    }

})();

export {
    mainGameCountdown
}
