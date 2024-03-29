document.getElementById('payButton').addEventListener('click', function(event) {
  event.preventDefault();
  var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  if (paymentMethod === 'creditCard') {
    // Show credit card details
    document.getElementById('creditCardDetails').style.display = 'block';
    document.getElementById('bankTransferDetails').style.display = 'none';
  } else if (paymentMethod === 'bankTransfer') {
    // Show bank transfer details
    document.getElementById('creditCardDetails').style.display = 'none';
    document.getElementById('bankTransferDetails').style.display = 'block';
  } else {
    // Hide both credit card and bank transfer details
    document.getElementById('creditCardDetails').style.display = 'none';
    document.getElementById('bankTransferDetails').style.display = 'none';
  }
  simulatePayment();
});

function simulatePayment() {
  // Simulate payment processing
  setTimeout(function() {
    document.getElementById('paymentResponse').innerText = 'Payment successful!';
  }, 2000);
}


  