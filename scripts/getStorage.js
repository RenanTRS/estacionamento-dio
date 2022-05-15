export const getStorage = () => {
    return localStorage.parking ? JSON.parse(localStorage.parking) : [];
};
