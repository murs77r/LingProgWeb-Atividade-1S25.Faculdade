let arrayPrincipal = [
    [
        [
            [
                [0, 1],
                [2, 3]
            ],
            [
                [4, 5],
                [6, 7]
            ]
        ],
        [
            [
                [8, 9],
                [10, 11]
            ],
            [
                [12, 13],
                [14, 15]
            ]
        ]
    ]
]
function atualizarArray() {
    console.log('Função atualizarArray acionada') // log simples
    document.getElementById('textoarray').textContent = JSON.stringify(arrayPrincipal) // atualiza texto do array
}
function resetarArray() {
    console.log('Função resetarArray acionada') // log simples
    arrayPrincipal = [
        [
            [
                [
                    [0, 1],
                    [2, 3]
                ],
                [
                    [4, 5],
                    [6, 7]
                ]
            ],
            [
                [
                    [8, 9],
                    [10, 11]
                ],
                [
                    [12, 13],
                    [14, 15]
                ]
            ]
        ]
    ]
    atualizarArray() // chama atualização do array
    document.getElementById('resultadoSlice').textContent = '' // limpa resultado do slice
}
function removerPrimeiro() {
    console.log('Função removerPrimeiro acionada') // log simples
    arrayPrincipal.shift() // remove primeiro elemento
    atualizarArray() // atualiza array na tela
}
function adicionarInicio() {
    console.log('Função adicionarInicio acionada') // log simples
    const valor = document.getElementById('inputUnshift').value // pega valor do input
    if (valor !== '') {
        arrayPrincipal.unshift(isNaN(Number(valor)) ? valor : Number(valor)) // adiciona valor no início
        atualizarArray() // atualiza array na tela
        document.getElementById('inputUnshift').value = '' // limpa input
    }
}
function concatenarArrays() {
    console.log('Função concatenarArrays acionada') // log simples
    const valor = document.getElementById('inputConcat').value // pega valor do input
    if (valor !== '') {
        const novoArray = valor.split(',').map(v => isNaN(Number(v.trim())) ? v.trim() : Number(v.trim())) // cria novo array
        arrayPrincipal = arrayPrincipal.concat(novoArray) // concatena arrays
        atualizarArray() // atualiza array na tela
        document.getElementById('inputConcat').value = '' // limpa input
    }
}
function achatarArray() {
    console.log('Função achatarArray acionada') // log simples
    let nivel = prompt('Digite o nível de profundidade para achatar (padrão: 1):', '1') // pede nível
    nivel = nivel === null || nivel === '' ? 1 : Number(nivel) // define nível
    if (isNaN(nivel) || nivel < 1) nivel = 1 // valida nível
    arrayPrincipal = arrayPrincipal.flat(nivel) // achata array
    atualizarArray() // atualiza array na tela
}
function usarSplice() {
    console.log('Função usarSplice acionada') // log simples
    const indice = Number(document.getElementById('inputSpliceIndex').value) // pega índice
    const qtd = Number(document.getElementById('inputSpliceQtd').value) // pega quantidade
    const valor = document.getElementById('inputSpliceValor').value // pega valor
    if (!isNaN(indice) && !isNaN(qtd)) {
        if (valor !== '') {
            arrayPrincipal.splice(indice, qtd, isNaN(Number(valor)) ? valor : Number(valor)) // faz splice com valor
        } else {
            arrayPrincipal.splice(indice, qtd) // faz splice sem valor
        }
        atualizarArray() // atualiza array na tela
        document.getElementById('inputSpliceIndex').value = '' // limpa input índice
        document.getElementById('inputSpliceQtd').value = '' // limpa input qtd
        document.getElementById('inputSpliceValor').value = '' // limpa input valor
    }
}
function usarSlice() {
    console.log('Função usarSlice acionada') // log simples
    const inicio = Number(document.getElementById('inputSliceInicio').value) // pega início
    const fim = Number(document.getElementById('inputSliceFim').value) // pega fim
    if (!isNaN(inicio) && !isNaN(fim)) {
        const resultado = arrayPrincipal.slice(inicio, fim) // faz slice
        document.getElementById('resultadoSlice').textContent = JSON.stringify(resultado) // mostra resultado
    }
}
document.addEventListener('DOMContentLoaded', atualizarArray) // atualiza array ao carregar página