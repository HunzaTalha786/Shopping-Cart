function calculate() {

    const priceItem1 = parseFloat(document.getElementById('item-1-price').value) ;
    const quantityItem1 = parseInt(document.getElementById('qty-item1').value) ;
    const priceItem2 = parseFloat(document.getElementById('item-2-price').value);
    const quantityItem2 = parseInt(document.getElementById('qty-item2').value);
    const shippingCharges = parseFloat(document.getElementById('shipping').value);

    // Compute total costs
    const totalItem1 = priceItem1 * quantityItem1;
    const totalItem2 = priceItem2 * quantityItem2;
    const totalCost = totalItem1 + totalItem2 + shippingCharges;

    // Create receipt
    const receipt = `
        <div class="receipt">
            <h2>Receipt</h2>
            <p>Item 1: $${priceItem1.toFixed(2)} x ${quantityItem1} = $${totalItem1.toFixed(2)}</p>
            <p>Item 2: $${priceItem2.toFixed(2)} x ${quantityItem2} = $${totalItem2.toFixed(2)}</p>
            <p>Shipping Charges: $${shippingCharges.toFixed(2)}</p>
            <h3>Total Cost: $${totalCost.toFixed(2)}</h3>
        </div>
    `;

    // Display the receipt
    document.getElementById('result').innerHTML = receipt;
}

function restart() {
    document.getElementById('item-1-price').value = '';
    document.getElementById('qty-item1').value = '';
    document.getElementById('item-2-price').value = '';
    document.getElementById('qty-item2').value = '';
    document.getElementById('shipping').value = '5';
    document.getElementById('result').innerHTML = '';
}