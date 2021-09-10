/** Strategy Pattern **/

/** Map Size **/
// 小: 21x21
// 中: 41x41
// 大: 61x61

const mapSizeType = {
    small: function () {
        return 21;
    },
    middle: function () {
        return 41;
    },
    large: function () {
        return 61;
    }
}
