document.addEventListener('DOMContentLoaded', function() {
  //This line i adds an event listener to the DOMContentLoaded event of the document.
  //It ensures that the enclosed code inside the function runs only after the entire HTML document has been loaded.
    document.getElementById('convertBtn').addEventListener('click', function() {
      //This line attaches a 'click' event listener to an HTML element with the ID 'convertBtn'.
      //When this element is clicked, the function inside the addEventListener block is triggered
      var bitcoinValue = parseFloat(document.getElementById('bitcoinInput').value)
      //This line retrieves the value entered in an input field with the ID 'bitcoinInput' and converts it to a floating-point number using parseFloat()
      //It assigns this value to the variable bitcoinValue
      var bitcoinToDinarRate = 25000
      var dinarValue = bitcoinValue * bitcoinToDinarRate
      document.getElementById('dinarOutput').value = dinarValue.toFixed(2)
      //This line sets the value of an input field with the ID 'dinarOutput' to the calculated dinarValue,
      //rounded to two decimal places using toFixed(2)
    })
  })
