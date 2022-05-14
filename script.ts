import { getDate } from './getDate.js'
import { useVehicle } from './useVehicle.js'
(() => {
    const getInputElement = (query: string) => document.querySelector(query) as HTMLInputElement | null //Função para a captura de inputs
    useVehicle().render() //Renderiza o storage
    
    const form = document.querySelector('form') as HTMLFormElement //Formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const name = getInputElement('[data-name]')?.value
        const color = getInputElement('[data-color]')?.value
        const plate = getInputElement('[data-plate]')?.value
        
        const date = getDate() //Pega os valores para data
        
        const data = {name, color, plate, date}
        useVehicle().add(data, true) //Adiciona veículo
    })
})()