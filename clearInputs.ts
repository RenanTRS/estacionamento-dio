interface ClearInputsProp {
    name: HTMLInputElement | null;
    plate: HTMLInputElement | null;
    color: HTMLInputElement | null;
}
export const clearInputs = ({name, plate, color}: ClearInputsProp) => {
    name!.value = ''
    plate!.value = ''
    color!.value = ''
}