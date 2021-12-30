//Raquete
let zagueiro=[15,150,575,150];
//zagueiro[0] ->xZagueiro
//zagueiro[1] ->yZagueiro
//zagueiro[2] ->xZagueiroOponente 
//zagueiro[3] ->yZagueiroOponente 

let caracteristicas=[10,75,0]
//caracteristicas[0] -> comprimentoRaquet
//caracteristicas[1] -> alturaRaquet
//caracteristicas[2] -> velYop;

let atacante=[415,150,175,150];
//atacante[0] ->xAtacante(xAtacante)
//atacante[1] ->yAtacante (yAtacante)
//atacante[2] ->xAtacanteOponente(xAtacanteEnemy)
//atacante[3] ->yAtacanteOponente(yAtacanteEnemy)

let  colidiu=false;

function criarRaquete(x,y){
  rect(x,y,caracteristicas[0],caracteristicas[1])
}

function moverRaquete(){
  if(keyIsDown(UP_ARROW) && zagueiro[1]>0){
    zagueiro[1]-=10;
    atacante[1]-=10;
  }
  if(keyIsDown(DOWN_ARROW) && zagueiro[1]<320){
    zagueiro[1]+=10;
    atacante[1]+=10;
  }
}

function MoverRaqOp(){
  if(keyIsDown(87) && zagueiro[3]>0){
    zagueiro[3]-=10;
    atacante[3]-=10;
  }
  if(keyIsDown(83) && zagueiro[3]<320){
    zagueiro[3]+=10;
    atacante[3]+=10;
  }
}

function colisaoBibli(x,y){
  colidiu=collideRectCircle(x, y, caracteristicas[0], caracteristicas[1], bola[0], bola[1], dimensoesBola[1]);
  if(colidiu){
    dimensoesBola[2]*=-1;
    sons[1].play();
  }
}