/** Decorator Pattern **/

const before = function (targetFunction, beforeFunction) {
    return function () {
        beforeFunction.apply(this, arguments);
        return targetFunction.apply(this, arguments);
    }
}

const after = function (targetFunction, afterFunction) {
    return function () {
        const retFunction = targetFunction.apply(this, arguments);
        afterFunction.apply(this, arguments);
        return retFunction;
    }
}

export {
    before,
    after
}
