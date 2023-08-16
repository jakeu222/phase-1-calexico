// // Write your code here...



// // ## Challenge #1
// // Fetch all the menu items from `http://localhost:3000/menu`. For each menu item create a `span` element that contains the name of the menu item, and add it to the `#menu-items` div.

const number = document.querySelector("#number-in-cart")

fetch("http://localhost:3000/menu")
    .then(r => r.json())
    .then(dataArray => {
        dataArray.forEach((dataObj) => {
            addData(dataObj)
        })

        displayMenuItem(dataArray[0])
    })



function addData(dataObj) {
    const menuItem = document.querySelector("#menu-items")
    const span = document.createElement("span")
    menuItem.append(span)
    span.textContent = dataObj.name

    //below is for challenge 3
    span.addEventListener("click", () => {
        displayMenuItem(dataObj)

    })

    // ## Challenge #3
    // When the user clicks on the menu items on the left, they should see all the details for that specific menu item.
}

// ## Challenge #2
// When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the `#dish` `section` element.

function displayMenuItem(dataObj) {
    const img = document.querySelector("#dish-image")
    const name = document.querySelector("#dish-name")
    const description = document.querySelector("#dish-description")
    const price = document.querySelector("#dish-price")

    img.src = dataObj.image
    name.textContent = dataObj.name
    description.textContent = dataObj.description
    price.textContent = dataObj.price
    number.textContent = dataObj.number_in_bag

}












// ## Challenge #4
// The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.
const form = document.querySelector("#cart-form")
form.addEventListener("submit", (e) => submitHandler(e))
function submitHandler(e) {
    e.preventDefault()

    number.textContent = parseInt(number.textContent) + parseInt(e.target["cart-amount"].value)

}
