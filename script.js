import { getDate } from './getDate.js';
import { useVehicle } from './useVehicle.js';
(() => {
    const getInputElement = (query) => document.querySelector(query); //Função para a captura de inputs
    useVehicle().render(); //Renderiza o storage
    const form = document.querySelector('form'); //Formulário
    form.addEventListener('submit', (event) => {
        var _a, _b, _c;
        event.preventDefault();
        const name = (_a = getInputElement('[data-name]')) === null || _a === void 0 ? void 0 : _a.value;
        const color = (_b = getInputElement('[data-color]')) === null || _b === void 0 ? void 0 : _b.value;
        const plate = (_c = getInputElement('[data-plate]')) === null || _c === void 0 ? void 0 : _c.value;
        const date = getDate(); //Pega os valores para data
        const data = { name, color, plate, date };
        useVehicle().add(data, true); //Adiciona veículo
    });
})();
