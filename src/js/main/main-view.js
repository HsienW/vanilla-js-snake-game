/** Mediator Pattern **/
import {mainGame} from './main.js';
import {mainGameTimeType} from '../main-config/main-game-time.js';

// mainViewMediator 負責中介管理遊戲 dom 相關的行為
// 例如: bind dom 相關的操作等等...
const mainView = (function () {
    let controlButtonsDom = null;
    let countdownDom = null;
    let aTeamScoreDom = null;
    let bTeamScoreDom = null;
    const operations = {};

    operations.initControlButtonsDom = function () {
        controlButtonsDom = document.getElementsByClassName('control-button')[0];
        mainGame.startButton = controlButtonsDom.querySelector('.start-button');
        mainGame.pauseButton = controlButtonsDom.querySelector('.pause-button');
        mainGame.finishButton = controlButtonsDom.querySelector('.finish-button');
    }

    operations.initCountdownDom = function () {
        countdownDom = document.getElementsByClassName('game-countdown')[0];
        countdownDom.innerHTML = '<div>' + mainGameTimeType.short() + '</div>';
    }

    operations.initTeamScoreDom = function () {
        aTeamScoreDom = document.getElementsByClassName('a-team')[0];
        bTeamScoreDom = document.getElementsByClassName('b-team')[0];
        aTeamScoreDom.innerHTML = '<div>0</div>';
        bTeamScoreDom.innerHTML = '<div>0</div>';
    }

    // 綁定每個狀態之下的 click event
    operations.bindControlButtonEvent = function () {
        // 將初始化取得的 main 實例的參照, 保存在 mainInstance 變數中,
        // 以防 onclick event 發生時 this 指向被修改成 button dom
        // const mainInstance = this;

        // 將每個 button 點擊後對應要做的事, 委託出去給 currentState 的 handler
        mainGame.startButton.onclick = function () {
            mainGame.currentState.start.clickHandler.call(mainGame);
        }
        mainGame.pauseButton.onclick = function () {
            mainGame.currentState.pause.clickHandler.call(mainGame);
        }
        mainGame.finishButton.onclick = function () {
            mainGame.currentState.finish.clickHandler.call(mainGame);
        }
    };

    operations.updateCountdownDom = function (value) {
        countdownDom.innerHTML = '<div>' + value + '</div>';
    }

    operations.updateATeamScoreDom = function (value) {
        aTeamScoreDom.innerHTML = '<div>' + value + '</div>';
    }

    operations.updateBTeamScoreDom = function (value) {
        bTeamScoreDom.innerHTML = '<div>' + value + '</div>';
    }

    //處理呼叫參數的介面
    const callAction = function () {
        let action = Array.prototype.shift.call(arguments);
        operations[action].apply(this, arguments);
    }

    return {
        callAction: callAction
    };
})();

export {
    mainView
}
