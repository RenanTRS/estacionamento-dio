const formatTime = (t: number) => {
    return String(t.toFixed().padStart(2, '0'))
}

export const getTime = () => {
    const getHour = (time: number) => {
        const h = Math.floor(((time / 1000) / 60) / 60)
        const hour = formatTime(h)

        return hour
    }

    const getMinute = (time: number) => {
        const m = Math.floor((time / 60000) % 60)
        const minute = formatTime(m)

        return minute
    }

    const getSecond = (time: number) => {
        const s = Math.floor((time % 60000) / 1000)
        const second = formatTime(s)

        return second
    }

    return {getHour, getMinute, getSecond}
}