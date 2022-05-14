export const getDate = () => {
    const newDate = new Date()
    const day = String(newDate.getDate()).padStart(2, '0')
    const month = String(newDate.getMonth()+1).padStart(2, '0')
    const year = String(newDate.getFullYear())
    const hour = String(newDate.getHours()).padStart(2, '0')
    const minute = String(newDate.getMinutes()).padStart(2, '0')

    const date = {day, month, year, hour, minute, newDate}
    
    return date
}