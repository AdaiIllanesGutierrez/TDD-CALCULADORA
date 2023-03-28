
function Calculadora(texto) {
    if(texto=="") return 0;

    let numeros=texto.split(",");
    if (numeros.legth==1){
        return parseInt(texto);

    }else {
        let sumar=0;
        for(let i=0;i<numeros.legth;i++){
            sumar=sumar+parseInt(numeros[i]);
        }

    }

    return sumar;

  }
  
  export default Calculadora;
  