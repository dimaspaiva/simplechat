const socket = io.connect('http://localhost:3000')

const msgBox = document.getElementById('feedBack')
// setTimeout(() => {
//    const teste = document.createElement('label')
//    const text = document.createTextNode('testando 1 2 3')
//    teste.appendChild(text)
//    msgBox.appendChild(teste)
// }, 3000);

const submitHandler = (e) => {
   // evitar o reload da página
   if (e.preventDefault) {
      e.preventDefault(e)
   }

   const telefone = /\S?\([1-9]{2}\)\s?[1-9]\s?[1-9]{4}\-?[1-9]{4}\s?/

   const mensagem = document.getElementById('mensagem').value.toString()
   console.log(mensagem)
   if (!mensagem)
      return

   socket.emit('chatMessage', mensagem)

   const label = document.createElement('p')
   label.className = 'propria'
   let text = ''

   const data = mensagem.split(telefone)
   if (mensagem.match(telefone)) {
      let link = document.createElement('a')
      let fone = document.createTextNode(mensagem.match(telefone)[0])
      link.appendChild(fone)
      link.target = '_blank'
      link.href = 'http://api.whatsapp.com/send?1=pt_BR&phone=55' + mensagem.match(telefone)[0].replace(/[\(\)\s\-]/g, "")
      // console.log(mensagem.match(telefone)[0].replace(/[\(\)\s\-]/g, ""))
      text = document.createTextNode(data[0])
      label.appendChild(text)
      label.appendChild(link)
      text = document.createTextNode(data[1])
      label.appendChild(text)
   } else {
      text = document.createTextNode(mensagem)
      label.appendChild(text)
   }
   msgBox.appendChild(label)

   document.getElementById('mensagem').value = ''

}

socket.on('broadMessage', (mensagem) => {

   const telefone = /\S?\([1-9]{2}\)\s?[1-9]\s?[1-9]{4}\-?[1-9]{4}\s?/

   const label = document.createElement('p')
   label.className = 'recebida'
   let text = ''

   const data = mensagem.split(telefone)
   if (mensagem.match(telefone)) {
      let link = document.createElement('a')
      let fone = document.createTextNode(mensagem.match(telefone)[0])
      link.appendChild(fone)
      link.target = '_blank'
      link.href = 'http://api.whatsapp.com/send?1=pt_BR&phone=55' + mensagem.match(telefone)[0].replace(/[\(\)\s\-]/g, "")
      // console.log(mensagem.match(telefone)[0].replace(/[\(\)\s\-]/g, ""))
      text = document.createTextNode(data[0])
      label.appendChild(text)
      label.appendChild(link)
      text = document.createTextNode(data[1])
      label.appendChild(text)
   } else {
      text = document.createTextNode(mensagem)
      label.appendChild(text)
   }
   msgBox.appendChild(label)
})

const form = document.getElementById('input')
if (form.attachEvent) {
   form.attachEvent('submit', submitHandler)
} else {
   form.addEventListener('submit', submitHandler)
}