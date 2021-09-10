/** Chain of Responsibility Pattern **/

import {outsideMapRule, bodyCollideRule} from './check-snake-dead-rules.js';
import {onlySurviveTeamRule} from './check-halfway-finish-rules.js';

const Checker = function (currentJudgeHandler) {
    this.currentCheckHandler = currentJudgeHandler;
    this.nextCheckHandler = null;
}

Checker.prototype.setNextCheckHandler = function (nextHandler) {
    this.nextCheckHandler = nextHandler;
    return nextHandler;
}

Checker.prototype.passCheck = function (...args) {
    // ...args 把傳進來的所有參數變成一個陣列, 之後都交由 currentCheckerHandler 也就是當前的職責方法執行
    const result = this.currentCheckHandler(...args);

    // 若 result 回傳的結果是 next 的話, 去判斷有沒有指定 nextJudgeHandler
    // 有的話就執行, 沒有的話直接回傳 result
    if (result === 'next') {
        return this.nextCheckHandler && this.nextCheckHandler.passCheck(...args);
    }
    return result;
}

// 檢查單一隻蛇是否觸發死亡的規則
const snakeDeadRuleChecker = function (position, snakeBody) {
    const checkOutsideMapRule = new Checker(outsideMapRule);
    const checkBodyCollideRule = new Checker(bodyCollideRule);

    checkOutsideMapRule.setNextCheckHandler(checkBodyCollideRule);

    return checkOutsideMapRule.passCheck(position, snakeBody);
};

// 檢查遊戲是否中途結束的規則
const halfwayFinishRuleChecker = function (allSnake) {
    const checkOnlySurviveTeamRule = new Checker(onlySurviveTeamRule);

    // checkTimeFinishRule.setNextCheckHandler(onlyOneTeamLeftRule);

    return checkOnlySurviveTeamRule.passCheck(allSnake);
};

export {
    snakeDeadRuleChecker,
    halfwayFinishRuleChecker,
}
