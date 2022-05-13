var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var useVehicle = function () {
    var getStorage = function () {
        return localStorage.parking ? JSON.parse(localStorage.parking) : [];
    };
    var add = function (vehicle, saved) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(vehicle.name, "</td>\n            <td>").concat(vehicle.plate, "</td>\n            <td>").concat(vehicle.color, "</td>\n            <td>").concat(vehicle.date, "</td>\n            <td><button class=\"delete\" data-plate=\"").concat(vehicle.plate, "\">X</button></td>\n        ");
        var parkingElement = document.querySelector('[data-parking]'); //table body
        parkingElement === null || parkingElement === void 0 ? void 0 : parkingElement.appendChild(row);
        if (saved) {
            setStorage(__spreadArray(__spreadArray([], getStorage(), true), [vehicle], false));
        }
    };
    var remove = function () { };
    var setStorage = function (vehicles) {
        localStorage.setItem('parking', JSON.stringify(vehicles)); //Add into localStorage
    };
    var render = function () {
        var parkingElement = document.querySelector('[data-parking]'); //Table body
        parkingElement.innerHTML = ''; //Clean element
        var parking = getStorage();
        if (parking.length) {
            parking.forEach(function (item) {
                add(item, false);
            });
        }
    };
    return { add: add, remove: remove, render: render };
};
