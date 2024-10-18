//Task 2
document.addEventListener("DOMContentLoaded", () => {
    const selectSize = document.getElementById("size-selector"); // get the select size by id
    const productPrice = document.getElementById("product-price"); // get the prod price by id
    const buyButton = document.getElementById("buy-button"); // get buy button by id
    selectSize.addEventListener("change", () => { // event listener add to size dropdown
        const sizeSelected = selectSize.options[selectSize.selectedIndex]; // get the selected size 
        const price = sizeSelected.getAttribute("data-price"); // get price according to selected size 
        //Task 3
        const status = sizeSelected.getAttribute("data-stock"); // get status according to size selected

        productPrice.textContent = `$${price}`; // update price according to size selected

        buyButton.disabled = (status === "Out of stock") // disable buy button if size is not in stock
    });


    //Task 4
    buyButton.addEventListener("click", () => { // event listener to buy button
        const sizeSelected = selectSize.options[selectSize.selectedIndex]; //get size selected
        const status = sizeSelected.getAttribute("data-stock"); //get stock status
        if (status === "in-stock") { // check if size is available
            alert("Thank you for your purchase"); // use alert to show confirmation 
        } else { alert("Size is not available") } // message that product cant be purchased bc is out of stock
    });
});

//Task 5: OPTIONAL
const addProduct = document.getElementById("add-product"); // get add product from ID
addProduct.addEventListener("submit", () => {
    preventDefault();
    const newProduct = document.getElementById("product-name").value; //get product name
    const newProductPrice = document.getElementById("product-price").value; //get product price
    const newProductStatus = document.getElementById("new-product-availability").value; //get product availability status

});
