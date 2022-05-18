import { getStorage } from "./useStorage.js";
export const updateQtd = () => {
    const parking = getStorage();
    const countElement = document.querySelector('[data-count]');
    countElement.innerHTML = String(parking.length).padStart(2, '0');
};
