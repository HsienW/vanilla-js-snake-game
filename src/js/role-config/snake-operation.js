/** Strategy Pattern **/

const BaseOperation = function () {
}

BaseOperation.prototype.doUp = function (direction) {
    // if (direction.y !== 0) return;
    return {x: 0, y: -1};
};

BaseOperation.prototype.doDown = function (direction) {
    // if (direction.y !== 0) return;
    return {x: 0, y: 1};
};

BaseOperation.prototype.doLeft = function (direction) {
    // if (direction.x !== 0) return;
    return {x: -1, y: 0};
};

BaseOperation.prototype.doRight = function (direction) {
    // if (direction.x !== 0) return;
    return {x: 1, y: 0};
};

const baseOperation = new BaseOperation();

const aSnakeOperation = {
    ArrowUp: function (direction) {
        return baseOperation.doUp(direction);
    },
    ArrowDown: function (direction) {
        return baseOperation.doDown(direction);
    },
    ArrowLeft: function (direction) {
        return baseOperation.doLeft(direction);
    },
    ArrowRight: function (direction) {
        return baseOperation.doRight(direction);
    }
}

const bSnakeOperation = {
    KeyW: function (direction) {
        return baseOperation.doUp(direction);
    },
    KeyS: function (direction) {
        return baseOperation.doDown(direction);
    },
    KeyA: function (direction) {
        return baseOperation.doLeft(direction);
    },
    KeyD: function (direction) {
        return baseOperation.doRight(direction);
    }
}

export {
    aSnakeOperation,
    bSnakeOperation
}
