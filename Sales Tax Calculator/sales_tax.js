"use strict";
var $ = function (id) {
    return document.getElementById(id); 
};

//Calculate total price
var calculateTotal = function(subtotal, tax_rate) {
    var total = (subtotal + (subtotal * (tax_rate * .01)));
    //round to 2
    total = total.toFixed(2);
    return total;
};

//calculate sales tax
var calculateSalesTax = function(subtotal, tax_rate) {
    var salesTax = ((subtotal + (subtotal * (tax_rate * .01)))-subtotal);
    salesTax = salesTax.toFixed(2);
    return salesTax;
};

//process entries
var processEntries = function() {
    var subtotal = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);
    //move cursor to subtotal
    document.getElementById('subtotal').focus()
    //check if value
    if (isNaN(subtotal) || isNaN(tax_rate)) {
        alert("Both entries must be numeric");
    //validate subtotal
    } else if (subtotal <= 0 || subtotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
    //validate tax rate
    } else if (tax_rate <= 0 || tax_rate > 12) {
        alert("Tax Rate must be > 0 and < 12");
    }
    //perform calculations
    else {
        $("total").value = calculateTotal(subtotal, tax_rate);
        $("sales_tax").value = calculateSalesTax(subtotal, tax_rate);
    }
};

//Clear entries function and move to subtotal
var clearEntries = function(){
    document.getElementById('subtotal').value = "";
    document.getElementById('tax_rate').value = "";
    document.getElementById('sales_tax').value = "";
    document.getElementById('total').value = "";
    document.getElementById('subtotal').focus()
};

var clearSub = function(){
    document.getElementById('subtotal').value = "";
};

var clearTax = function(){
    document.getElementById('tax_rate').value = "";
};

//startup function
window.onload = function() {
    //process/clear buttons
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("subtotal").onclick = clearSub
    $("tax_rate").onclick = clearTax
    //move cursor to subtotal
    document.getElementById('subtotal').focus()
};



