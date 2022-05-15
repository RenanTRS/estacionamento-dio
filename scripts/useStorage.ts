import { Vehicle } from "./interface/Vehicle"

export const getStorage = ():Vehicle[] => {
    //Pega dados do localStorage
    return localStorage.parking ? JSON.parse(localStorage.parking) : []
}

export const setStorage = (vehicles: Vehicle[]) => {
    //Adiciona dados no localStorage
    localStorage.setItem('parking', JSON.stringify(vehicles))
}