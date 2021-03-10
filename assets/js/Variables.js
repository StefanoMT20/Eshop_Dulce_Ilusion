var donutlist = [];

function addDonut(tipo, donuts, precio) {
  var newOrden = {tipo};
  newOrden.donuts = donuts
  newOrden.precio = precio
  donutlist.push(newOrden);
}

const deleteCart = () => {
  localStorage.setItem('localPedido', JSON.stringify([]))
  localStorage.setItem('cartNumbers', 0)
  location.reload()
}

const sendPedido = (e) => {
  e.preventDefault()
  let numeroNegocio = '+51980501015'
  let nombre = `${firstName.value} ${apellido.value}`
  let telefono = telf.value
  let semail = email.value
  let dis= window['dist'].value
  let tipoCasa = window['tipo-casa'].value
  let direccion1 = direc.value
  let numc = numc.value
  let depa = depa.value
  let referencia = ref.value
  let horario = 'Coordinar con la tienda'
  let $selectedPayMethod = [...document.getElementsByName('paymentMethod')].filter(method => method.checked === true)[0]
  let metodoPago = $selectedPayMethod.value
  let pedido = ''
  donutlist.forEach(orden => {
    let fila = ''
    pedido += `%2A${orden.tipo}%2A%0D%0A`
    orden.donuts.forEach(donut => {
      fila += `%09${donut.sabor}: ${donut.cantidad} %0D%0A`
    })
    pedido += fila
  })
  if(nombre.trim() === '' || telefono.trim() === '' || tipoCasa.trim() === '' || direccion1.trim() === '' || referencia.trim() === ''){
    alert("Rellena todos los campos obligatorios")
  } else {
    // Checkboxes del form
    if(window['same-address'].checked && window['save-info'].checked){
      window.open(`https://wa.me/${numeroNegocio}?text=%2ANUEVA+ORDEN%2A%0D%0A%2ANombre%3A%2A+${nombre}%0D%0A%2ATelefono%3A%2A+${telefono}%0D%0A%2AEmail%3A%2A+${semail}%0D%0A%2ADirecci%C3%B3n%3A%2A+%28${tipoCasa}%29+${direccion1}%2C+${direccion2}%0D%0A%2AReferencia%3A%2A+${referencia}%0D%0A%2AHorario%3A%2A+${horario}%0D%0A%2AMetodo+de+Pago%3A%2A+${metodoPago}%0D%0A%2APEDIDO%3A%2A%0D%0A${pedido}%0D%0A&lang=en`)
      deleteCart()
      let orderModal = document.querySelector('#exampleModal-3')
      let myModal = bootstrap.Modal.getInstance(orderModal)
      myModal.hide()
      let cartShoppingModal = document.querySelector('#exampleModal')
      let myModal1 = bootstrap.Modal.getInstance(cartShoppingModal)
      myModal1.hide()
    } else {
      alert('Tienes que aceptar pedir con 1 día de anticipación y enviar el voucher si es requerido')
    }
  }
}

btnSend.onclick = sendPedido