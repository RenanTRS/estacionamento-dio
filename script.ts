import { useVehicle } from './useVehicle.js'
(() => {
    const getInputElement = (query: string) => document.querySelector(query) as HTMLInputElement | null //Função para a captura de inputs
    
    const form = document.querySelector('form') as HTMLFormElement //Formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const name = getInputElement('[data-name]')?.value
        const color = getInputElement('[data-color]')?.value
        const plate = getInputElement('[data-plate]')?.value

        const data = {name, color, plate, date: new Date}
        useVehicle().add(data) //Adiciona veículo
    })
})()