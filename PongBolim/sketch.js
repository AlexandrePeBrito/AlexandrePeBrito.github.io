function setup() {
  createCanvas(600, 400);
  sons[0].loop();
}

function draw() {
  background(color(50,205,50));
  fill(color(255,255,0));
  criarBola();
  fill(color(220,220,220));
  criandoCampo();
  placar();
  movimento();
  limite();
  criarGol(meuGol[0],meuGol[1]);
  criarGol(enemyGol[0],enemyGol[1]);
  fill(color(255,20,147));
  criarRaquete(zagueiro[0],zagueiro[1]);      //zagueiro
  criarRaquete(atacante[0],atacante[1]);      //Atacante
  moverRaquete();
  colisaoBibli(zagueiro[0],zagueiro[1]);      //colisao zagueiro
  colisaoBibli(atacante[0],atacante[1]);      //colisao atacante
  fill(color(0,0,255));
  criarRaquete(zagueiro[2],zagueiro[3]);      //zagueiro Inimigo
  criarRaquete(atacante[2],atacante[3]);      //Atacante Inimigo
  colisaoBibli(zagueiro[2],zagueiro[3]);      //colisao zagueiro inimigo
  colisaoBibli(atacante[2],atacante[3]);      //colisao Atacante Inimigo
  MoverRaqOp();
  marcarPonto();

}