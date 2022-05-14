export const checkPlate = (inputPlate) => {
    let plate = inputPlate.value.toUpperCase();
    plate = plate.replace(/[-]/g, '');
    const getStorage = () => {
        return localStorage.parking ? JSON.parse(localStorage.parking) : [];
    };
    const plates = getStorage();
    plates.forEach(item => {
        let message = '';
        if (item.plate === plate) { //Caso true passar a mensagem de erro
            message = 'Placa já cadastrada';
        }
        return inputPlate.setCustomValidity(message);
    });
};
