//bola
let bola=[300,200]
// bola[0] -> xBolinha
// bola[1] -> yBolinha

let dimensoesBola=[20,(20/2),5,7];
// dimensoesBola[0] -> diametro
// dimensoesBola[1] -> raio
// dimensoesBola[2] -> velocidade X
// dimensoesBola[3] -> velocidade Y

function criarBola(){
  circle(bola[0],bola[1],dimensoesBola[0]);
}

function movimento(){
  bola[0]+=dimensoesBola[2];
  bola[1]+=dimensoesBola[3];
}

function limite(){
  if(((bola[0]+dimensoesBola[1]) > width)||((bola[0]-dimensoesBola[1]) < 0)){
    dimensoesBola[2]*=-1;
  }
  
  if(((bola[1]+dimensoesBola[1])>height)||((bola[1]-dimensoesBola[1])<0)){
    dimensoesBola[3]*=-1;
  }
}