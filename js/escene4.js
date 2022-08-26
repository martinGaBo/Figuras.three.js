//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color('black')
scene.fog = new THREE.Fog(0x000000, 1, 28)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometria 
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color : 'blue'});
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 8;

//Funcion
function animate() {
	requestAnimationFrame( animate );
    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.01;

	renderer.render( scene, camera );

    camera.position.z=24
    
    

}
animate();