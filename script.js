const toggle = document.getElementById('toggle')
const price = document.querySelectorAll('h3')
const month = document.getElementById('month')
const anually = document.getElementById('anually')

toggle.addEventListener('click', (e) => {
  if (toggle.childNodes[1].classList.contains('ball') && !(toggle.childNodes[1].classList.contains('active'))) {
    toggle.childNodes[1].classList.add('active')

    price[0].textContent = '$19.99'
    price[1].textContent = '$24.99'
    price[2].textContent = '$39.99'

  } else {
    toggle.childNodes[1].classList.remove('active')


    price[0].textContent = '$199.99'
    price[1].textContent = '$249.99'
    price[2].textContent = '$399.99'

  }
})

window.addEventListener('keydown', (e) => {
  let k = e.key
  console.log(k)
  if (k === 'ArrowRight') { 
    toggle.childNodes[1].classList.add('active')
    price[0].textContent = '$19.99'
    price[1].textContent = '$24.99'
    price[2].textContent = '$39.99'
  } 
  if (k === 'ArrowLeft') {
    toggle.childNodes[1].classList.remove('active')
    price[0].textContent = '$199.99'
    price[1].textContent = '$249.99'
    price[2].textContent = '$399.99'
  }
})