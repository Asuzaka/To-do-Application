export const getTime = () => {
    let Data = new Date()
    // Date
    let year = Data.getFullYear()
    let month = (Data.getMonth() + 1) < 10 ? '0' + (Data.getMonth() + 1) : (Data.getMonth() + 1)
    let day = Data.getDate() < 10 ? '0' + Data.getDate() : Data.getDate()
    // time
    let hour = Data.getHours() < 10 ? '0' + Data.getHours() : Data.getHours()
    let minut = Data.getMinutes() < 10 ? '0' + Data.getMinutes() : Data.getMinutes()
    let second = Data.getSeconds() < 10 ? '0' + Data.getSeconds() : Data.getSeconds()
    // mergin to return 
    let now = `${hour}:${minut},  ${month}/${day}/${year}`
    return now
}
