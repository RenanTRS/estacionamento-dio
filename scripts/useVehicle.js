import { updateQtd } from './updateQtd.js';
import { getStorage, setStorage } from "./useStorage.js";
import { removeData } from './removeData.js';
export const useVehicle = () => {
    const add = (vehicle, saved) => {
        var _a;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="colLight">${vehicle.name}</td>
            <td class="colDark">${vehicle.plate}</td>
            <td class="colLight">${vehicle.color}</td>
            <td class="colDark">
                ${vehicle.date.day}/${vehicle.date.month}/${vehicle.date.year} - ${vehicle.date.hour}:${vehicle.date.minute}
            </td>
            <td class="colLight">
                <button type="button" title="Excluir ${vehicle.plate}" class="delete" data-delete="${vehicle.plate}">X</button>
            </td>
        `;
        (_a = row.querySelector('[data-delete]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (event) => {
            const button = event.target;
            const dataDelete = button === null || button === void 0 ? void 0 : button.dataset.delete;
            removeData(dataDelete);
            render();
        });
        const parkingElement = document.querySelector('[data-parking]'); //Corpo da tabela
        parkingElement === null || parkingElement === void 0 ? void 0 : parkingElement.appendChild(row);
        if (saved) {
            setStorage([...getStorage(), vehicle]); //Salva no localStorage se true
            updateQtd(); //Atualiza o contador
        }
    };
    const render = () => {
        const parkingElement = document.querySelector('[data-parking]'); //Table body
        parkingElement.innerHTML = ''; //Clean element
        const parking = getStorage();
        updateQtd(); //Atualiza o contador
        if (parking.length) {
            parking.forEach(item => {
                add(item, false); //Adiciona dados na tela sem salvar no localStorage
            });
        }
    };
    return { add, render };
};
