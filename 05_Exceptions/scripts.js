function sadacao(nome){
  if(typeof nome != 'string'){
    // thorw  é  uma  palavra resevada  tacar
    throw new Error("o parametro nome  preicisa ser srting");
  }else{
    console.log('ola:', nome);
  }
}

sadacao("Matheus");
sadacao(5);

console.log("testando");