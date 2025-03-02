import convert from 'convert'

function dias_minutos(days) {
    return convert(days, 'days').to('minutes')
}

function gigabytes_bytes(gb) {
    gb = gb * 1024 * 1024 * 1024
    return convert(gb, 'bytes').to('bytes')
}

const dias = parseInt(prompt('Digite a quantidade de dias para converter em minutos: '))
const gb = prompt('Digite a quantidade de Gigabytes para converter em Bytes: ')

console.log(`${dias} dias equivalem a ${dias_minutos(dias)} minutos.`)
console.log(`${gb} GB equivalem a ${gigabytes_bytes(gb)} bytes.`)
