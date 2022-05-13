interface Vehicle {
    name?: string;
    plate?: string;
    color?: string;
    date: Date;
}

export const useVehicle = () => {
    const getStorage = ():Vehicle[] => {
        return localStorage.parking ? JSON.parse(localStorage.parking) : []
    }

    const add = (vehicle: Vehicle, saved: boolean) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${vehicle.name}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.color}</td>
            <td>${vehicle.date}</td>
            <td><button class="delete" data-plate="${vehicle.plate}">X</button></td>
        `

        const parkingElement = document.querySelector('[data-parking]') //table body
        parkingElement?.appendChild(row)

        if(saved){
            setStorage([...getStorage(), vehicle])
        }
    }

    const remove = () => {}
    
    const setStorage = (vehicles: Vehicle[]) => {
        localStorage.setItem('parking', JSON.stringify(vehicles)) //Add into localStorage
    }

    const render = () => {
        const parkingElement = document.querySelector('[data-parking]') //Table body
        parkingElement!.innerHTML = '' //Clean element
        
        const parking = getStorage()
        
        if(parking.length){
            parking.forEach(item => {
                add(item, false)
            });
        }        
    }

    return {add, remove, render}
}