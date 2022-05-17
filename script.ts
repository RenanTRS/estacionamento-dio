import { useVehicle } from './scripts/useVehicle.js'
import { checkPlate } from './scripts/checkPlate.js'
import { getDate } from './scripts/getDate.js'
import { clearInputs } from './scripts/clearInputs.js'

(() => {
    const getInputElement = (query: string) => document.querySelector(query) as HTMLInputElement | null //Função para a captura de inputs
    useVehicle().render() //Renderiza o storage
    
    const inputCarPlate = getInputElement('[data-plate]')
    inputCarPlate?.addEventListener('blur', (event) => {
        const input = event.target as HTMLInputElement
        checkPlate(input) //Checa se a placa já existe
    })

    const form = document.querySelector('form') as HTMLFormElement //Formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let name = getInputElement('[data-name]')
        let plate = getInputElement('[data-plate]')
        let color = getInputElement('[data-color]')
        
        const date = getDate() //Pega os valores para data
        
        const data = {
            name : name?.value,
            color: color?.value, 
            plate: plate?.value.replace(/[\.\-}><{\(\)´`~&!:;,|\@%#\\/$*^\]\[\]]/g, '').toUpperCase(), //Remove o caractere "-" e transforma em maiúsculo
            date
        }

        useVehicle().add(data, true) //Adiciona veículo
    
        clearInputs({name, plate, color})
    })
})()