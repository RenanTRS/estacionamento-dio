export const getDate = () => {
    const fullDate = new Date()
    const day = String(fullDate.getDate()).padStart(2, '0')
    const month = String(fullDate.getMonth()+1).padStart(2, '0')
    const year = String(fullDate.getFullYear())
    const hour = String(fullDate.getHours()).padStart(2, '0')
    const minute = String(fullDate.getMinutes()).padStart(2, '0')

    const date = {day, month, year, hour, minute, fullDate}
    
    return date
}