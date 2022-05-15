import { getStorage } from "./useStorage.js";
export const checkPlate = (inputPlate) => {
    let plate = inputPlate.value.toUpperCase();
    plate = plate.replace(/[-]/g, '');
    const plates = getStorage();
    console.log(plates);
    plates.forEach(item => {
        let message = '';
        if (item.plate === plate) { //Caso true passar a mensagem de erro
            message = 'Placa já cadastrada';
        }
        return inputPlate.setCustomValidity(message);
    });
};
