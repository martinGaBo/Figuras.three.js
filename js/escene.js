//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0x000000)
scene.fog = new THREE.Fog(0x00FBFF, 1, 35)

var loader = new THREE.TextureLoader();
loader.load("../img/fondo.jpg ", function(texture){
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
const geometry = new THREE.ConeGeometry( 5, 10, 22 );
const material = new THREE.MeshBasicMaterial( {color: 0xFF00C9} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 8;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.02;
    
	renderer.render( scene, camera );
    camera.position.z=20
    
    

}
animate();








