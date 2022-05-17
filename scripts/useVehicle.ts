import { getStorage, setStorage } from "./useStorage.js"
import { Vehicle } from "./interface/Vehicle"
import { removeData } from './removeData.js';

export const useVehicle = () => {
    const add = (vehicle: Vehicle, saved: boolean) => {
        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${vehicle.name}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.color}</td>
            <td>
                ${vehicle.date.day}/${vehicle.date.month}/${vehicle.date.year} - ${vehicle.date.hour}:${vehicle.date.minute}
            </td>
            <td>
                <button type="button" title="Excluir ${vehicle.plate}" class="delete" data-delete="${vehicle.plate}">X</button>
            </td>
        `
        
        row.querySelector('[data-delete]')?.addEventListener('click', (event: any) => {
            const button = event.target
            const dataDelete = button?.dataset.delete
            removeData(dataDelete)
            render()
        })

        const parkingElement = document.querySelector('[data-parking]') //Corpo da tabela
        parkingElement?.appendChild(row)

        if(saved){
            setStorage([...getStorage(), vehicle]) //Salva no localStorage se true
        }
    }
    
    const render = () => {
        const parkingElement = document.querySelector('[data-parking]') //Table body
        parkingElement!.innerHTML = '' //Clean element
        
        const parking = getStorage()
        
        if(parking.length){
            parking.forEach(item => {
                add(item, false) //Adiciona dados na tela sem salvar no localStorage
            });
        }        
    }

    return {add, render}
}