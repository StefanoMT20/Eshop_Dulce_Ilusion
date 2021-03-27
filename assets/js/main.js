/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '30px',
  duration: 1500,
  reset: false,
});

sr.reveal(`.home__data, .home__img, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
  origin: 'top',
  interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
  origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
  origin: 'right'
})
var swiper = new Swiper('.swiper1', {

  effect: 'cube',
  grabCursor: true,
  loop:true,
  cubeEffect: {
    shadow: true,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
    
  },
  autoplay: {
    delay: 3000,
   
  },


  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  
});


var swiper = new Swiper('.swiper2', {
  spaceBetween: 30,
  // centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function sweetalertclick() {

  swal("Envíado", "Responderemos lo más pronto posible", "success")
}

function sweetalertclick2() {
  swal("Listo", "Agregado al carrito de compras", "success")
}

const btnb = document.getElementById('but');
const btnb2 = document.getElementById('but2');
const $inputs = [...document.getElementsByClassName('inputNumber')]
const $flavors = [...document.getElementsByClassName('flavor')]

let totalMedia = 0
let totalDocena = 0

const decrement = (flavor) => {
  let $input = flavor.querySelector('.inputNumber')
  let value = parseInt($input.value)
  if (value > 0) {
    $input.value = parseInt($input.value) - 1
    if (flavor.parentElement.classList.contains('half-dozen')) {
      totalMedia -= 1

    } else {
      totalDocena -= 1
    }
    // cambiarValor()
  }
  if (totalMedia < 6) {
    btnb.disabled = true;
  } else {
    btnb.disabled = false;
  }
  if (totalDocena < 12) {
    btnb2.disabled = true;
  } else {
    btnb2.disabled = false;
  }
}



const increment = (flavor) => {
  let $input = flavor.querySelector('.inputNumber')
  let value = parseInt($input.value)
  let max = 12
  let total = totalDocena
  if (flavor.parentElement.classList.contains('half-dozen')) {
    max = 6
    total = totalMedia
  }
  if (total < max) {
    $input.value = parseInt($input.value) + 1
    if (flavor.parentElement.classList.contains('half-dozen')) {
      totalMedia += 1
    } else {
      totalDocena += 1
    }
    // cambiarValor()
  }

  if (totalMedia < 6) {
    btnb.disabled = true;
  } else {
    btnb.disabled = false;
  }
  if (totalDocena < 12) {
    btnb2.disabled = true;
  } else {
    btnb2.disabled = false;
  }
}


$flavors.forEach(flavor => {
  flavor.querySelector('.decrement').onclick = () => {
    decrement(flavor)
  }
  flavor.querySelector('.increment').onclick = () => {
    increment(flavor)
  }
  // flavor.querySelector('.inputNumber').oninput = cambiarValor
})


const sendToShoppingCart = (type) => {
  let $flavors = undefined
  let max = 0
  let pedido = {
    donuts: []
  }
  if (type === 'hdoz') {
    $flavors = [...hdoz.getElementsByClassName('flavor')]
    max = 6
    pedido.tipo = 'Media Docena'
    pedido.precio = '20'
    
    
  } else {
    $flavors = [...doz.getElementsByClassName('flavor')]
    max = 12
    pedido.tipo = 'Docena'
    pedido.precio = '40'
  }
  
  let totalDonuts = 0
  $flavors.forEach(flavor => {
    let val = parseInt(flavor.querySelector('.inputNumber').value)
    let id = flavor.querySelector('.inputNumber').getAttribute('id')
    totalDonuts += val

    if (val > 0) {
      pedido.donuts.push({
        sabor: id,
        cantidad: val
      })
    }
  })
  // console.log(pedido);
  if (totalDonuts === max) {
    addDonut(pedido.tipo, pedido.donuts, pedido.precio)
    localStoragePedido(donutlist);
    sweetalertclick2()
  } else {
    alert('Algo ha salido mal, vuelve a hacer el pedido')
  }
}

function localStoragePedido(plist) {
  localStorage.setItem('localPedido', JSON.stringify(plist));

}
let carts = document.querySelectorAll('.b');

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers();
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('#lblCartCount').textContent = productNumbers;
  }
}




function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')


  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#lblCartCount').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('#lblCartCount').textContent = 1;
  }
}


onLoadCartNumbers()
