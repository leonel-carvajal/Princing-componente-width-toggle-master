const toggle = document.getElementById('toggle')
const price = document.querySelectorAll('h3')

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
console.log(price[0].textContent)