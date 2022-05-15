export const getStorage = () => {
    //Pega dados do localStorage
    return localStorage.parking ? JSON.parse(localStorage.parking) : [];
};
export const setStorage = (vehicles) => {
    //Adiciona dados no localStorage
    localStorage.setItem('parking', JSON.stringify(vehicles));
};
