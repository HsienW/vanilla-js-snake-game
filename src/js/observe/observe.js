/** Observer pattern **/


const observer = (function () {
    const subscriberList = {};

    const doSubscription = function (key, handler) {
        if (!subscriberList[key]) {
            subscriberList[key] = [];
        }
        subscriberList[key].push(handler);
    }

    const triggerPush = function () {
        const key = Array.prototype.shift.call(arguments);
        const handlers = subscriberList[key];
        let handler;

        if (!handlers || handlers.length === 0) {
            return false;
        }

        for (let i = 0; handler; handler = handlers[i++]) {
            handler.apply(this, arguments);
        }
    }

    const removeSubscription = function (key, handler) {
        const handlers = subscriberList[key];

        if (!handlers) {
            return false;
        }

        if (!handler) {
            handlers.length === 0;
            return;
        }

        for (let i = handlers.length - 1; i >= 0; i--) {
            const checkHandler = handlers[i];

            if (checkHandler === handler) {
                handlers.splice(i, 1);
            }
        }
    }

    return {
        doSubscription: doSubscription,
        triggerPush: triggerPush,
        removeSubscription: removeSubscription
    }

})();

export {
    observer
}
