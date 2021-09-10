import {checkPositionOutsideMap, checkPositionOnSnakeBody} from '../common/role-util.js';

const outsideMapRule = function (position) {
    const outsideMapSnake = checkPositionOutsideMap(position);
    return outsideMapSnake ? 'dead' : 'next';
}

const bodyCollideRule = function (position, snakeBody) {
    const bodyCollideInfo = checkPositionOnSnakeBody(position, snakeBody);
    return bodyCollideInfo ? 'dead' : 'next';
}

export {
    outsideMapRule,
    bodyCollideRule
}
