
let arr = [1,2, 3, 4, 5];
let arr2 = [6,2,7,8,6];

function interaArray(arr){
  if(arr.length ==0){
    throw new Error("O array precisa ter  pelo menos  um elemto");
  }else{
    for(let i =0; i < arr.length; i++){
      console.log(i);
    }
  }
}

function arrayVazia(arr){
  if(arr.length > 0 ){
    throw Error("O arra não pode ter  elementos");
  }else{
    console.log("Agora deu certo");
  }
}

interaArray(arr);
interaArray(arr2);