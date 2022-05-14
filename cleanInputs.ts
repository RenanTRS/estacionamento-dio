//interface Props extends HTMLInputElement{}
interface CleanInputsProp {
    name: HTMLInputElement | null;
    plate: HTMLInputElement | null;
    color: HTMLInputElement | null;
}
export const cleanInputs = ({name, plate, color}: CleanInputsProp) => {
    name!.value = ''
    plate!.value = ''
    color!.value = ''
}