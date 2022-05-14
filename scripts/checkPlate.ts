interface Vehicle {
    name?: string;
    plate?: string;
    color?: string;
    date: {
        day: string;
        month: string;
        year: string;
        hour: string;
        minute: string;
        newDate: Date;
    }
}

export const checkPlate = (inputPlate: HTMLInputElement) => {
    let plate = inputPlate.value.toUpperCase()
    plate = plate.replace(/[-]/g, '')

    const getStorage = ():Vehicle[] => {
        return localStorage.parking ? JSON.parse(localStorage.parking) : []
    }
    const plates = getStorage()
    
    plates.forEach(item => {
        let message = ''
        
        if(item.plate === plate){ //Caso true passar a mensagem de erro
            message = 'Placa já cadastrada'
        }

        return inputPlate.setCustomValidity(message)
    })
}