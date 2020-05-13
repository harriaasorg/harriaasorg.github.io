let modal = document.querySelector('.cart-modal')
		modalContent = document.querySelector('.cart-product-section')
		total = []
		modalTotal = document.querySelector('#total')
		products  = document.querySelector('#cart-count')
		productsCounter = 0
		
document.addEventListener('click', (e) => {
	if(e.target.classList == 'cart-i'){
		modal.classList.add('open')
	} 
	if(e.target.classList == 'close-b'){
		modal.classList.remove('open')
	} 
})

const reducer = (acc, current) => acc + current

const counter = () => {
	let totalPrice = total.reduce(reducer)
	modalTotal.innerHTML = totalPrice
}

const addProduct = (price, name) => {
	total.push(price)
	modalContent.innerHTML += 
	`<div class="cart-product">
		<h3>${name}</h3>
		<p>${price}$</p>
	</div>`
	productsCounter++
	products.innerHTML = productsCounter
	counter()
}

document.querySelector('#budget').addEventListener('input', function(){
	let totalPrice = total.reduce(reducer)
	let budgetInput = document.querySelector('#budget').value
	if(totalPrice > budgetInput){
		modalTotal.style.color = "red"
	} else {
		modalTotal.style.color = "black"
	}
})