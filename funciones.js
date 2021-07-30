function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
obtener_localstorage ();
guardar_localstorage ();

function obtener_localstorage(){
    if (localStorage.getItem (" nombre ")){
        let nombre = localStorage.getItem ("nombre");
        let persona = localStorage.getItem ("persona"); 
    
    console.log (nombre);
    console.log (persona);

    
    } else{
        console.log (" ESTE PROYECTO ES UNA CALCULADORA ");
    }
    
}

function guardar_localstorage (){
    let persona ={
        nombre: "Ludmila",
        apellido: "Herran",
    }

};
let nombre = " del proyecto Calculadora";
let persona = "Ludmila Herran";

localStorage.setItem("nombre",  (nombre)  );
localStorage.setItem("persona",  (persona ));
