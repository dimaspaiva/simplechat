# SIMPLECHAT
   Criação de uma chat web para testar funcionalidade semelhantes ao do whatsapp
   como reconhecimento de links, números de telefone e comandos para deixar
   sublinhado, em negrito, riscado ou em italico
   
## Implementações

   * 02/02/19
      Criação do servidor, envio e recebimento de mensagens e reconhecimento de números

## Regras para identificação

**Números de telefone**
   
   os primeiros 11 números digitados, não iniciados ou que não contém na segunda casa o número zero

**Estilo de texto**
   
   * Itálico: "/ *(TEXTO)* /"
   * Negrito: "* **(TEXTO)** "
   * Sublinhado: "_ _(TEXTO)_ _"
   * Riscado: "~ ~(TEXTO)~ ~"

## Códigos RegEx

```regex
const regexFone = /\(?[1-9]{2}\)?\s?[1-9]\s?[1-9]{4}\-?[1-9]{4}/
const regexNegrito = /\*[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\*/
const regexItalico = /\/[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\//
const regexSublinhado = /\_[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\_/
const regexRiscado = /\~[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\~/
```

## Fontes
 * [Todos DDDS do Brasil](https://www.codigosddd.com.br/)
 * [Guia de comandos RegEx](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)