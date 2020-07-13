export function americanDate(date) {
    let date_converted = new Date(date);
    let day = (date_converted.getDate() < 10) ? `0${date_converted.getDate()}` : date_converted.getDate();
    let month = (date_converted.getMonth()+1 < 10) ? `0${date_converted.getMonth()+1}` : date_converted.getMonth()+1;
    let year = date_converted.getFullYear();
    return `${year}-${month}-${day}`;
}