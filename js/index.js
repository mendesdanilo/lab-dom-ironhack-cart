// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  let subTotal = quantity.value * price.innerHTML
  product.querySelector('.subtotal span').innerHTML = subTotal
  return subTotal
  //... your code goes here
}

/*
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = price * quantity

  return Number(subtotal.innerHTML)
}
*/


function calculateAll() {
  const products = document.getElementsByClassName('product')
  const productsArray = [...products]
  let soma = 0
  for (let i = 0; i < productsArray.length; i++){
    updateSubtotal(productsArray[i])
    soma += updateSubtotal(productsArray[i])
    }
    document.querySelector('#total-value span').innerText = soma;
    return soma;
  }
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
