let fullOperation = '';
let historial = [];


function addNumber(number) {
  let op = fullOperation.split('');
  console.log(op)
  if (op.includes('+') && number.toString() === '+') return;
  if (op.includes('-') && number.toString() === '-') return;
  if (op.includes('x') && number.toString() === 'x') return;
  if (op.includes('/') && number.toString() === '/') return;
  if (op.includes('^') && number.toString() === '^') return;

  if(number === "="){
    console.log(fullOperation);
    historial.push(fullOperation);
    calculate();
    return;
  }

  if(number == "C"){
    fullOperation = '';
    showNumber()
    return;
  }

  fullOperation = fullOperation + number.toString();
  
  showNumber();
}

function calculate(){

    let result = 0;

    if(fullOperation.includes('+') ){
        let [a,b] = fullOperation.split('+');
        result = Number(a) + Number(b);
    }else if(fullOperation.includes('-')){
        let [a,b] = fullOperation.split('-');
        result = Number(a) - Number(b);
    }else if(fullOperation.includes('x')){
        let [a,b] = fullOperation.split('x');
        result = Number(a) * Number(b);
    }else if(fullOperation.includes('/')){
        let [a,b] = fullOperation.split('/');
        result = Number(a) / Number(b);
    }else if(fullOperation.includes('^')){
        let [a,b] = fullOperation.split('^');
        result = Number(a) ** Number(b);
    }

    /*
    let sum = fullOperation.split('+');
    let result = Number(sum[0]) + Number(sum[1]); 
    console.log(result);*/

    
    fullOperation = result.toString();
    historial.push(`= ${result}`);
    showNumber();
    showHistorial();

    

  }

  function showNumber() {
  document.getElementById('operation').innerHTML = fullOperation;
}

function showHistorial(){
    document.getElementById('Historial').innerHTML = historial;


}
