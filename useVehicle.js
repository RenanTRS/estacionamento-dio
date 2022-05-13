export var useVehicle = function () {
    var add = function (vehicle) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(vehicle.name, "</td>\n            <td>").concat(vehicle.plate, "</td>\n            <td>").concat(vehicle.color, "</td>\n            <td>").concat(vehicle.date, "</td>\n            <td><button class=\"delete\" data-plate=\"").concat(vehicle.plate, "\">X</button></td>\n        ");
        var parking = document.querySelector('[data-parking]'); //table body
        parking === null || parking === void 0 ? void 0 : parking.appendChild(row);
    };
    var remove = function () { };
    var save = function () { };
    var render = function () { };
    return { add: add, remove: remove, save: save, render: render };
};
