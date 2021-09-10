import {mapSize} from '../role/map.js';

// 亂數隨機產生在 mapSize * mapSize 範圍內的一組 x y 座標
const getRandomPosition = () => {
    return {
        x: Math.floor(Math.random() * mapSize) + 1,
        y: Math.floor(Math.random() * mapSize) + 1
    }
}

const getRandomFoodAmount = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const getRandomFoodType = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const checkValueIsEmpty = (value) => {
    if (value === null || value === undefined) {
        return true;
    }
    return false;
}

const checkArrayIsEmpty = (array) => {
    if (array.length === 0) {
        return true;
    }
    return false;
}

const checkObjectIsEmpty = (object) => {
    if (Object.keys(object).length === 0) {
        return true;
    }
    return false;
}

export {
    getRandomPosition,
    getRandomFoodAmount,
    getRandomFoodType,
    checkValueIsEmpty,
    checkArrayIsEmpty,
    checkObjectIsEmpty,
}
