const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyvaluetoconvert = Document.querySelector(".currency-value-to-conver")//valor em real

    const currencyvalueConverted = Document.querySelector(".currency-value")//outras moedas

    const dolarToday = 4.9


    const convertValue = inputCurrencyValue / dolarToday
    
    currencyvaluetoconvert.innerHTML =  new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
      }) .format(inputCurrencyValue)

      currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
      }).format(convertValue)
}
convertButton.addEventListener("click", convertValues)