document.addEventListener("DOMContentLoaded", () => {
    const selectSize = document.getElementById("size-selector"); // get the select size by id
    const productPrice = document.getElementById("product-price"); // get the prod price by id
    const buyButton = document.getElementById("buy-price"); // get buy button by id
    selectSize.addEventListener("change", () => { // event listener add to size dropdown
        const sizedSelected = selectSize.options[selectSize.selectedIndex]; // get the selected size 
        const price = sizedSelected.getAttribute("data-price"); // get price according to selected size 
    })
})