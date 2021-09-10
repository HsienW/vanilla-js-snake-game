/** Strategy Pattern **/

/** Game Time **/
// 短: 60
// 一般: 90
// 長: 120

const mainGameTimeType = {
    short: function () {
        return 60;
    },
    general: function () {
        return 90;
    },
    large: function () {
        return 120;
    }
}

export {
    mainGameTimeType
}
