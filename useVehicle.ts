interface Vehicle {
    name?: string;
    plate?: string;
    color?: string;
    date: Date;
}

export const useVehicle = () => {
    const add = (vehicle: Vehicle) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${vehicle.name}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.color}</td>
            <td>${vehicle.date}</td>
            <td><button class="delete" data-plate="${vehicle.plate}">X</button></td>
        `
        
        const parking = document.querySelector('[data-parking]') //table body
        parking?.appendChild(row)
    }

    const remove = () => {}
    const save = () => {}
    const render = () => {}

    return {add, remove, save, render}
}