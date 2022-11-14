// Q. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price_of_item_1 = 650,
    price_of_item_2 = 100,
    quantity_of_item_1 = 3,
    quantity_of_item_2 = 7,
    shipping_charges = 100
total_cost = (price_of_item_1 * quantity_of_item_1) + (price_of_item_2 * quantity_of_item_2) + shipping_charges

document.write("Price of item 1 is " + price_of_item_1 + "< b>")
document.write("Quantity of item 1 is " + quantity_of_item_1 + "<br>")

document.write("Price of item 2 is " + price_of_item_2 + " <r>")
document.write("Quantity of item 2 is " + quantity_of_item_2 + "<br>")

document.write("Shipping Charges " + shipping_charges + "<br> <br>")
document.write("Total cost of your order is  " + total_cost + "<br>")