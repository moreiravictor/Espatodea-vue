export function americanDate(date) {
    let date_converted = new Date(date);
    let day = (date_converted.getUTCDate() < 10) ? `0${date_converted.getUTCDate()}` : date_converted.getUTCDate();
    let month = (date_converted.getMonth()+1 < 10) ? `0${date_converted.getMonth()+1}` : date_converted.getMonth()+1;
    let year = date_converted.getFullYear();
    return `${year}-${month}-${day}`;
}