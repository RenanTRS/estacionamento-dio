import { useVehicle } from './useVehicle.js';
import { checkPlate } from './checkPlate.js';
import { getDate } from './getDate.js';
import { clearInputs } from './clearInputs.js';
(() => {
    const getInputElement = (query) => document.querySelector(query); //Função para a captura de inputs
    useVehicle().render(); //Renderiza o storage
    const inputCarPlate = getInputElement('[data-plate]');
    inputCarPlate === null || inputCarPlate === void 0 ? void 0 : inputCarPlate.addEventListener('blur', (event) => {
        const input = event.target;
        checkPlate(input); //Checa se a placa já existe
    });
    const form = document.querySelector('form'); //Formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = getInputElement('[data-name]');
        let plate = getInputElement('[data-plate]');
        let color = getInputElement('[data-color]');
        const date = getDate(); //Pega os valores para data
        const data = {
            name: name === null || name === void 0 ? void 0 : name.value,
            color: color === null || color === void 0 ? void 0 : color.value,
            plate: plate === null || plate === void 0 ? void 0 : plate.value.replace(/[-]/g, '').toUpperCase(),
            date
        };
        useVehicle().add(data, true); //Adiciona veículo
        clearInputs({ name, plate, color });
    });
})();
