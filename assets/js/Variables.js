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

// REEMPLAZA LA FUNCION sendPedido

const sendPedido = (e) => {
  e.preventDefault()
  let numeroNegocio = '+51980501015'
  let nombre = `${firstName.value} ${apellido.value}`
  let telefono = telf.value
  let semail = email.value
  let dis= window['distrito'].value
  let tipoCasa = window['tipo-casa'].value
  let direccion1 = direc.value
  let numCasa = numc.value
  let department = depa.value
  let referencia = ref.value
  let horario = 'Coordinar con la tienda'
  let $selectedPayMethod = [...document.getElementsByName('paymentMethod')].filter(method => method.checked === true)[0]
  let metodoPago = $selectedPayMethod.value
  let pedido = ''
  donutlist.forEach(orden => {
    let fila = ''
    pedido += `*${orden.tipo}*\n`
    orden.donuts.forEach(donut => {
      fila += `\t${donut.sabor}: ${donut.cantidad}\n`
    })
    pedido += fila
  })
  if(nombre.trim() === '' || telefono.trim() === '' || tipoCasa.trim() === '' || direccion1.trim() === '' || referencia.trim() === ''){
    alert("Rellena todos los campos obligatorios")
  } else {
    // Checkboxes del form
    if(window['same-address'].checked && window['save-info'].checked){
      let msg = `*NUEVA ORDEN*
*Nombre*: ${nombre}
*Telefono*: ${telefono}
*E-mail*: ${semail}
*Distrito*: ${dis}
*Direccion*: (${tipoCasa}) ${direccion1}
*Numero de Casa*: ${numCasa}
*Departamento*: ${department}
*Referencia*: ${referencia}
*Horario*: ${horario}
*Metodo de pago*: ${metodoPago}
*PEDIDO*:
${pedido}`
      let encodedMsg = encodeURIComponent(msg)
      window.open(`https://wa.me/${numeroNegocio}?text=${encodedMsg}`)
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