
function convert() {
    let celcius = Number(document.getElementById('input').value);
    let fahrenheit = (celcius * 9/5) + 32;
  
    let result = document.getElementById('result');
    result.innerHTML = fahrenheit.toFixed(3) + ' °F';
}
