
export const parseCurrencyMoney = (value) => {
    let values = `${(parseFloat(value)).toFixed(2)}`.split('.')
    return `${`${values[0]}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`)},${values[1]}`.split(',')[0]
}