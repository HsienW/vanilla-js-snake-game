const Map = function (elementId, mapSize) {
    this.gameMap = document.getElementById(elementId);
    this.mapSize = mapSize;
}

Map.prototype.getMapSize = function () {
    return this.mapSize;
}

Map.prototype.renderMap = function () {
    this.gameMap.innerHTML = '';
}

const map = new Map('game-map', 41);
const mapSize = map.getMapSize();

export {
    map,
    mapSize
}
