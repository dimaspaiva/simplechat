console.log('testando regex')

const regexFone = /\(?[1-9]{2}\)?\s?[1-9]\s?[1-9]{4}\-?[1-9]{4}/
const regexNegrito = /\*[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\*/
const regexItalico = /\/[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\//
const regexSublinhado = /\_[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\_/
const regexRiscado = /\~[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\~/

const numeros = [
  '(35) 9 9866-7352', //ok
  '(35) 9 98667352', //ok
  '(35) 99866-7352', //ok
  '(35) 998667352', //ok
  '(35)9 9866-7352', //ok
  '(35)99866-7352', //ok
  '(35)998667352', //ok
  '(35)9 98667352', //ok
  '35998667352', //no
  '213125123512', //no
  '(35)9', //no
  '(35)99', //no
  '(35)999', //no
  '(35)9999', //no
  '(35)99999', //no
  '(35)999999', //no
  '(35)9999999', //no
  '(35)99999999', //no
  '(01)99999999', //no
  '(10)99999999', //no
  'nome' //no
]

const textoItalico = [
  '/nome/', //ok
  '/nome sobrenome/', //ok
  '/ nome /', //no
  '/ nome', //no
  'nome /', //no
  'nome' //no
]

const textoNegrito = [
  '*nome*', //ok
  '*nome sobrenome*', //ok
  '* nome', //no
  'nome *', //no
  '* nome *', //no
  'nome' //no
]

const textoSublinhado = [
  '_nome_', //ok
  '_nome sobrenome_', //ok
  '_ nome _', //no
  '_ nome', //no
  'nome _', //no
  'nome' //no
]

const textoRiscado = [
  '~nome~', //ok
  '~nome sobrenome~', //ok
  '~ nome ~', //no
  '~ nome', //no
  'nome ~', //no
  'nome' //no
]

console.log('Teste telefone\r\n--------------')
for (const i in numeros) {
  console.log(numeros[i] + ' - ' + (numeros[i].match(regexFone) ? true : false))
}

console.log('\nTeste marcações\r\nRiscado\n--------------')
for (const i in textoRiscado) {
  console.log(
    textoRiscado[i] +
      ' - ' +
      (textoRiscado[i].match(regexRiscado) ? true : false)
  )
}
console.log('Sublinhado\r\n--------------')
for (const i in textoSublinhado) {
  console.log(
    textoSublinhado[i] +
      ' - ' +
      (textoSublinhado[i].match(regexSublinhado) ? true : false)
  )
}
console.log('\nNegrito\r\n--------------')
for (const i in textoNegrito) {
  console.log(
    textoNegrito[i] +
      ' - ' +
      (textoNegrito[i].match(regexNegrito) ? true : false)
  )
}
console.log('\nItálico\r\n--------------')
for (const i in textoItalico) {
  console.log(
    textoItalico[i] +
      ' - ' +
      (textoItalico[i].match(regexItalico) ? true : false)
  )
}

// Update //
