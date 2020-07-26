//value of kelvin
const kelvin = 273;
//Converting to Celsius
let celsius = kelvin-273;
//Converting to Fahrenheit
let fahrenheit = celsius*(9/5)+32;
//ceil the fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees farenheit and ${celsius} degrees celsius.`)
