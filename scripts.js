const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value

  const currencyvaluetoconvert = document.querySelector(".currency-value-to-conver")//valor em real

  const currencyvalueConverted = document.querySelector(".currency-value")//outras moedas

  console.log(currencySelect.value)

  const dolarToday = 4.9
  const euroToday = 5.3
  const libraToday = 6.2
  const bitcoinToday = 186.904

if ( currencySelect.value =="dolar") {
  currencyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  } ).format(inputCurrencyValue / dolarToday)
}

if ( currencySelect.value =="euro") {
  currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency: "EUR"
  }).format(inputCurrencyValue / euroToday)
}
if ( currencySelect.value =="libra") {
  currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency: "GBP"
  }).format(inputCurrencyValue / libraToday)
}
if ( currencySelect.value =="bitcoin") {
  currencyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency: "BTC"
  }).format(inputCurrencyValue / bitcoinToday)
}
  
  currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  } ).format(inputCurrencyValue)
}
function changeCurrency (){
  
const currencyName = document.getElementById ("currency-name")
const currencyImage = document.querySelector(".currency-img")
const currencySelectdois = document.querySelector (".currency-select-dois")


if (currencySelect.value == "dolar"){
  currencyName.innerHTML = "dolar americano"
  currencyImage.src = "./estados-unidos (1) 1.png"
}

if (currencySelect.value == "euro"){
  currencyName.innerHTML = "Euro"
  currencyImage.src = "./Design sem nome 3.png"
}
if (currencySelect.value == "bitcoin"){
  currencyName.innerHTML = "Bitcoin"
  currencyImage.src = "./bitcoin 1.png"
}
if (currencySelect.value == "libra"){
  currencyName.innerHTML = "Libra"
  currencyImage.src = "./libra 1.png"
}


convertValues() 
}
 currencySelect.addEventListener("change",changeCurrency)

convertButton.addEventListener("click", convertValues)