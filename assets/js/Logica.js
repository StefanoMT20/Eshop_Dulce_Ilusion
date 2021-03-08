document.querySelector('#but').addEventListener('click', () => {sendToShoppingCart('hdoz'); drawDonutsTable()});
document.querySelector('#but2').addEventListener('click', () => {sendToShoppingCart('doz'); drawDonutsTable()});
drawDonutsTable();

// SIN USO
function saveOrder() {
  var md = document.querySelector('#md').value;
  var d1 = document.querySelector('#clasica').value,
  d2 = document.querySelector('#rubia').value,
  d3 = document.querySelector('#elegante').value,
  d4 = document.querySelector('#energetica').value,
  d5 = document.querySelector('#fresca').value,
  d6 = document.querySelector('#irresistible').value,
  d7 = document.querySelector('#naranjita').value,
  d8 = document.querySelector('#pinky').value,
  d9 = document.querySelector('#sublime').value,
  d10 = document.querySelector('#engreida').value;
  pre = document.querySelector('.b').value;
  addDonut(md, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, value);
  drawDonutsTable();
}


function getdonutlist() {
  var storedList = localStorage.getItem('localPedido');
  if(storedList==null){
    donutlist = []
  }
  else{
    donutlist = JSON.parse(storedList);
  }  
  return donutlist;
  
}
  
function drawDonutsTable() {
  var list = getdonutlist(),
    tbody = document.querySelector("#donutTable tbody");

  tbody.innerHTML = "";
  price = 0;
  for (var i = 0; i < list.length; i++) {
    price += parseInt(list[i].precio);
    var row = tbody.insertRow(i);
    var cltipo = row.insertCell(0),
      clclas = row.insertCell(1),
      clrub = row.insertCell(2);

    cltipo.innerHTML = list[i].tipo;
    let flavorsList = "";
    list[i].donuts.forEach((donut) => {
      // console.log(donut);
      flavorsList += `<p class="table-donuts">${donut.sabor}: ${donut.cantidad}</p>`;
    });
    clclas.innerHTML = flavorsList;
    clrub.innerHTML = `<p class="table-price">${list[i].precio}</p>`;
    tbody.appendChild(row);
  }
  let totalRow = tbody.insertRow(list.length)
  let clLabel = totalRow.insertCell(0)
  let clEmpty= totalRow.insertCell(1)
  let clTotal = totalRow.insertCell(2)
  clLabel.innerHTML = '<p class="table-total-label">TOTAL</p>'
  clTotal.innerHTML = `<p class="table-total table-price">${price}</p>`
  console.log(price)
}