
function convert() {
    let  word = document.getElementById('input').value;
    let split = word.split(' ');
     let count = split.length-1;
     if(count>0){
  
    let result = document.getElementById('result');
    result.innerHTML = count;}
    else{
        let result = document.getElementById('result');
    result.innerHTML = 'write somthing...';
    }
}
