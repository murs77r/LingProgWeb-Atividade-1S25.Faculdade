let arrayPrincipal = [1, 2, [3, 4], 5, 6]
function atualizarArray() {
    document.getElementById('textoarray').textContent = JSON.stringify(arrayPrincipal)
}
function resetarArray() {
    arrayPrincipal = [1, 2, [3, 4], 5, 6]
    atualizarArray()
    document.getElementById('resultadoSlice').textContent = ''
}
function removerPrimeiro() {
    arrayPrincipal.shift()
    atualizarArray()
}
function adicionarInicio() {
    const valor = document.getElementById('inputUnshift').value
    if (valor !== '') {
        arrayPrincipal.unshift(isNaN(Number(valor)) ? valor : Number(valor))
        atualizarArray()
        document.getElementById('inputUnshift').value = ''
    }
}
function concatenarArrays() {
    const valor = document.getElementById('inputConcat').value
    if (valor !== '') {
        const novoArray = valor.split(',').map(v => isNaN(Number(v.trim())) ? v.trim() : Number(v.trim()))
        arrayPrincipal = arrayPrincipal.concat(novoArray)
        atualizarArray()
        document.getElementById('inputConcat').value = ''
    }
}
function achatarArray() {
    let nivel = prompt('Digite o nível de profundidade para achatar (padrão: 1):', '1')
    nivel = nivel === null || nivel === '' ? 1 : Number(nivel)
    if (isNaN(nivel) || nivel < 1) nivel = 1
    arrayPrincipal = arrayPrincipal.flat(nivel)
    atualizarArray()
}
function usarSplice() {
    const indice = Number(document.getElementById('inputSpliceIndex').value)
    const qtd = Number(document.getElementById('inputSpliceQtd').value)
    const valor = document.getElementById('inputSpliceValor').value
    if (!isNaN(indice) && !isNaN(qtd)) {
        if (valor !== '') {
            arrayPrincipal.splice(indice, qtd, isNaN(Number(valor)) ? valor : Number(valor))
        } else {
            arrayPrincipal.splice(indice, qtd)
        }
        atualizarArray()
        document.getElementById('inputSpliceIndex').value = ''
        document.getElementById('inputSpliceQtd').value = ''
        document.getElementById('inputSpliceValor').value = ''
    }
}
function usarSlice() {
    const inicio = Number(document.getElementById('inputSliceInicio').value)
    const fim = Number(document.getElementById('inputSliceFim').value)
    if (!isNaN(inicio) && !isNaN(fim)) {
        const resultado = arrayPrincipal.slice(inicio, fim)
        document.getElementById('resultadoSlice').textContent = JSON.stringify(resultado)
    }
}
document.addEventListener('DOMContentLoaded', atualizarArray)