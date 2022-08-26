//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xffffff)

var loader = new THREE.TextureLoader();
loader.load("../img/fondo2.jpg ", function(texture){
    scene.background = texture
})
 
//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.BoxGeometry( 10, 10, 16 );
const material = new THREE.MeshBasicMaterial( {color: 'yellow'} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 8;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
    
	renderer.render( scene, camera );
    camera.position.z=24
    
    

}
animate();