import { getTime } from "./getTime.js";
import { getStorage, setStorage } from "./useStorage.js";
export const removeData = (plateDelete) => {
    const vehicle = getStorage().find(item => item.plate === plateDelete); //Pega o carro que possui a placa
    const entranceTime = new Date(vehicle.date.fullDate);
    const exitTime = new Date();
    const time = exitTime.getTime() - entranceTime.getTime();
    const hour = getTime().getHour(time);
    const minute = getTime().getMinute(time);
    const second = getTime().getSecond(time);
    const exit = confirm(`Veículo: ${plateDelete}\nTempo: ${hour}h:${minute}m:${second}s \nDeseja sair?`);
    if (exit) {
        const vehicles = getStorage().filter(item => {
            return item.plate !== plateDelete; //Pega o que for diferente da placa
        });
        setStorage(vehicles);
    }
};
