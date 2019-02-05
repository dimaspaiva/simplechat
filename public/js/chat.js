const socket = io.connect('http://10.12.21.81')

const msgBox = document.getElementById('feedBack')

const submitHandler = (e) => {
   // evitar o reload da página
   if (e.preventDefault()) {
      e.preventDefault(e)
   }

   let regexFone = /\(?[1-9]{2}\)?\s?[1-9]\s?[1-9]{4}\-?[1-9]{4}/
   let regexNegrito = /\*[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\*/
   let regexItalico = /\-[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\-/
   let regexSublinhado = /\_[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\_/
   let regexRiscado = /\~[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\~/

   const mensagem = document.getElementById('mensagem').value.toString()
   // console.log(mensagem)
   if (!mensagem)
      return

   socket.emit('chatMessage', mensagem)

   const msg = document.createElement('p')
   msg.className = 'propria'
   let text = ''

   const data = mensagem.split(regexFone)
   while (mensagem.match(regexFone)) {
      let link = document.createElement('a')
      let fone = document.createTextNode(mensagem.match(regexFone)[0])
      link.appendChild(fone)
      link.target = '_blank'
      link.href = 'http://api.whatsapp.com/send?1=pt_BR&phone=55' + mensagem.match(regexFone)[0].replace(/[\(\)\s\-]/g, "")
      // console.log(mensagem.match(regexFone)[0].replace(/[\(\)\s\-]/g, ""))
      text = document.createTextNode(data[0])
      msg.appendChild(text)
      msg.appendChild(link)
      text = document.createTextNode(data[1])
      msg.appendChild(text)
   }
   if (!mensagem.match(regexFone)) {
      text = document.createTextNode(mensagem)
      msg.appendChild(text)
   }
   msgBox.appendChild(msg)
   msgBox.appendChild(msg)
   while (msg.innerHTML.match(regexNegrito)) {
      let negrito = msg.innerHTML.replace('*', '<b>').replace('*', '</b>')
      msg.innerHTML = negrito
   }
   while (msg.innerHTML.match(regexItalico)) {
      let negrito = msg.innerHTML.replace('-', '<i>').replace('-', '</i>')
      msg.innerHTML = negrito
   }
   while (msg.innerHTML.match(regexSublinhado)) {
      let negrito = msg.innerHTML.replace('_', '<u>').replace('_', '</u>')
      msg.innerHTML = negrito
   }
   while (msg.innerHTML.match(regexRiscado)) {
      let negrito = msg.innerHTML.replace('~', '<strike>').replace('~', '</strike>')
      msg.innerHTML = negrito
   }

   document.getElementById('mensagem').value = null

}

socket.on('broadMessage', (mensagem) => {

   let regexFone = /\(?[1-9]{2}\)?\s?[1-9]\s?[1-9]{4}\-?[1-9]{4}/
   let regexNegrito = /\*[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\*/
   let regexItalico = /\-[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\-/
   let regexSublinhado = /\_[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\_/
   let regexRiscado = /\~[^\s][A-Za-z0-9\s\.\@\#\$\%\!\&]*[^\s]\~/

   const msgRecebida = document.createElement('p')
   msgRecebida.className = 'recebida'
   let text = ''

   const data = mensagem.split(regexFone)
   while (mensagem.match(regexFone)) {
      let link = document.createElement('a')
      let fone = document.createTextNode(mensagem.match(regexFone)[0])
      link.appendChild(fone)
      link.target = '_blank'
      link.href = 'http://api.whatsapp.com/send?1=pt_BR&phone=55' + mensagem.match(regexFone)[0].replace(/[\(\)\s\-]/g, "")
      // console.log(mensagem.match(regexFone)[0].replace(/[\(\)\s\-]/g, ""))
      text = document.createTextNode(data[0])
      msgRecebida.appendChild(text)
      msgRecebida.appendChild(link)
      text = document.createTextNode(data[1])
      msgRecebida.appendChild(text)
   }
   if (!mensagem.match(regexFone)) {
      text = document.createTextNode(mensagem)
      msgRecebida.appendChild(text)
   }
   while (msgRecebida.innerHTML.match(regexNegrito)) {
      let negrito = msgRecebida.innerHTML.replace('*', ' <b>').replace('*', '</b> ')
      msgRecebida.innerHTML = negrito
      console.log(negrito)
   }
   while (msgRecebida.innerHTML.match(regexItalico)) {
      let italico = msgRecebida.innerHTML.replace('-', ' <i>').replace('-', '</i> ')
      msgRecebida.innerHTML = italico
   }
   while (msgRecebida.innerHTML.match(regexSublinhado)) {
      let sublinhado = msgRecebida.innerHTML.replace('_', ' <u>').replace('_', '</u> ')
      msgRecebida.innerHTML = sublinhado
   }
   while (msgRecebida.innerHTML.match(regexRiscado)) {
      let riscado = msgRecebida.innerHTML.replace('~', ' <strike>').replace('~', '</strike> ')
      msgRecebida.innerHTML = riscado
   }
   console.log(msgRecebida.innerHTML)
   msgBox.appendChild(msgRecebida)
})

const form = document.getElementById('input')
if (form.attachEvent) {
   form.attachEvent('submit', submitHandler)
} else {
   form.addEventListener('submit', submitHandler)
}

document.getElementById('mensagem').addEventListener('keypress', element => {
   if (element.key === 'Enter') {
      submitHandler(element)
   }
})