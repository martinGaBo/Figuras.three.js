//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0x0032FF)


//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );
 
//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0xFF2D00} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 1;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.02;
    
	renderer.render( scene, camera );
    camera.position.z=4
    
    

}
animate();