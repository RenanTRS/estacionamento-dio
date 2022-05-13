import { useVehicle } from './useVehicle.js';
(function () {
    var getInputElement = function (query) { return document.querySelector(query); }; //Função para a captura de inputs
    var form = document.querySelector('form'); //Formulário
    form.addEventListener('submit', function (event) {
        var _a, _b, _c;
        event.preventDefault();
        var name = (_a = getInputElement('[data-name]')) === null || _a === void 0 ? void 0 : _a.value;
        var color = (_b = getInputElement('[data-color]')) === null || _b === void 0 ? void 0 : _b.value;
        var plate = (_c = getInputElement('[data-plate]')) === null || _c === void 0 ? void 0 : _c.value;
        var data = { name: name, color: color, plate: plate, date: new Date };
        useVehicle().add(data); //Adiciona veículo
    });
})();
