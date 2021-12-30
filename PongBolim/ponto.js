let pontos=[0,0];
//pontos[0] -> meus pontos
//pontos[1] -> adversario pontos

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(pontos[0],170,26);
  fill(color(255,140,0));
  rect(450,10,40,20).
  fill(255);
  text(pontos[1],470,26);
}

function marcarPonto(){
  if((bola[0]>594) && (bola[1]>130 && bola[1]<250)){
    pontos[0]+=1;
    sons[2].play();
    bola[0]=300;
    bola[1]=200;
  }
  if((bola[0]<6) && (bola[1]>130 && bola[1]<250)){
    pontos[1]+=1;
    sons[2].play(); 
    bola[0]=300;
    bola[1]=200;
  }
}