import { getStorage } from "./useStorage.js";
export const checkPlate = (inputPlate) => {
    let plate = inputPlate.value.toUpperCase();
    plate = plate.replace(/[- ]/g, '');
    let message = '';
    const plates = getStorage();
    plates.forEach(item => {
        if (item.plate === plate) { //Caso true passar a mensagem de erro
            message = 'Placa já cadastrada';
        }
    });
    if (plate === '') { //Caso o valor seja vazio
        message = 'Insira a placa do veículo';
    }
    if (plate.trim().length < 7) {
        if (plate.length === 6) { //Caso falte apenas 1 caractere
            message = `Falta 1 caractere`;
        }
        else {
            message = `Faltam ${7 - plate.length} caracteres`;
        }
    }
    return inputPlate.setCustomValidity(message);
};
