//caracteristicas[0] -> comprimentoRaquet
//caracteristicas[1] -> alturaRaquet
function criandoCampo(){
  rect(300,2,2,394);    //linha central
  rect(2,2,594,2);      //linha superior
  rect(2,394,594,2);    //linha inferior
  rect(2,2,2,394);      //linha esquerda
  rect(594,2,2,394);    //linha direita
  
  //pequena Area Esquerda
  rect(2,120,50,2);    //Linha superior da area Esquerda
  rect(2,260,50,2);    //Linha inferior da area Esquerda
  rect(50,120,2,140);  //Linha central da area Esquerda
  
  //Grande area esquerda
  rect(2,290,100,2);    //Linha superior da area Esquerda
  rect(2,90,100,2);    //Linha superior da area Esquerda
  rect(100,90,2,200);  //Linha central da area Esquerda
  
  //pequena Area Direita
  rect(547,120,50,2);    //Linha superior da area Direita
  rect(547,260,50,2);    //Linha inferior da area Direita
  rect(545,120,2,140);  //Linha central da area Direita
  
  //Grande area esquerda
  rect(493,290,100,2);    //Linha superior da area Esquerda
  rect(493,90,100,2);    //Linha superior da area Esquerda
  rect(490,90,2,200);  //Linha central da area Esquerda
  
  noFill();
  circle(300,200,150);
}
