function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));  // público
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));  // público
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(3,10,3));  // privado
  this.add(this.piernaIzq, this.piernaDer, cuerpo);
  this.piernaIzq.position.z = -2;
  this.piernaIzq.position.y = -2.5;
  this.piernaDer.position.z = 2;
  this.piernaDer.position.y = -2.5;
  cuerpo.position.y = 2.5;
}

Pieza.prototype = new THREE.Object3D();
var pieza;

var setup = function() {
  pieza = new Pieza();
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 20;
  
  var lienzo = document.getElementById("Ejemplo19");
  renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
  renderizador.setSize( 600, 600);
  
  escena = new THREE.Scene();
  escena.add(pieza);
}

var loop = function(){
  requestAnimationFrame(loop);
  pieza.rotateY(0.025);
  pieza.piernaIzq.rotateZ(0.025);
  renderizador.render( escena, camara );
}

var renderizador, escena, camara;
setup();
loop();
