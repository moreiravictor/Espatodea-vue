export function prepareDate(date) {
  let date_converted = new Date(date);
  return `${date_converted.getDate()}/${date_converted.getMonth()+1}/${date_converted.getFullYear()}`;
}