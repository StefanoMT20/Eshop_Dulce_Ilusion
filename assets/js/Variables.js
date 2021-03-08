var donutlist = [];

function addDonut(tipo, donuts, precio) {
  var newOrden = {tipo};
  newOrden.donuts = donuts
  newOrden.precio = precio
  console.log(newOrden);
  donutlist.push(newOrden);
}

const sendPedido = (e) => {
  e.preventDefault()
  let numeroNegocio = +51980501015
  let nombre = `${firstName.value} ${apellido.value}`
  let telefono = telf.value
  let semail = email.value
  let tipoCasa = window['tipo-casa'].value
  let direccion1 = direc.value
  let direccion2 = direc2.value
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
    } else {
      alert('Tienes que aceptar pedir con 1 día de anticipación y enviar el voucher si es requerido')
    }
  }
}

btnSend.onclick = sendPedido
// ------UNA DOCENA----
// donutlist2 = []
// function addDonut2(tipo2, donut1, donut2, donut3,donut4, donut5,donut6, donut7, donut8, donut9,donut10) {
//   var newOrden2 = {

//     docena: tipo2,
//     clasica: donut1,
//     rubia: donut2,
//     elegante: donut3,
//     energetica: donut4,
//     fresca: donut5,
//     irresistible: donut6,
//     naranjita: donut7,
//     pinky: donut8,
//     sublime: donut9,
//     engreida: donut10,
//   };
//   console.log(newOrden2)
//   donutlist2.push(addDonut2);
// }