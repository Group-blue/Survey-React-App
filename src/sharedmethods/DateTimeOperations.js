export const convertTimestampToDate = (timestamp) => {
    let date = new Intl.DateTimeFormat('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    .format(timestamp);
    return date;
}