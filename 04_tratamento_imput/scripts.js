
// fazer  uma  função para  verificar  numero
function checarNumero(num) {
  //caquiter espesial usa trasfoma  mesmo que valor seja  Strig em numero
  let number = Number(num);

  //verificando se  numero é numeo
  if (Number.isNaN(number)) {
    alert("Digitou errado passe só numeo para programa");
  } else {
    return number;
  }
}

checarNumero(5);
checarNumero('dsds')


//pedido para usario digitar 
let DigiteNum = prompt("Digite um numero");

checarNumero(DigiteNum);