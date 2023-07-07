function convert(){
    let cmVal = Number(document.getElementById('input').value);
    let inchval = cmVal/2.24;
  
    let result = document.getElementById('result');
    result.innerHTML = inchval.toFixed(3)+' inches';
      }