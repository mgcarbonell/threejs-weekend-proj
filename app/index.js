// import * as THREE from 'three';

// Set up  the scene
const scene = new THREE.Scene();
// Set up the camera: PerspectiveCamera is taking four attributes:
// 1. Field of view (FOV): the extent of the scene that is on display in degrees
// 2. The aspect ratio: The WIDTH divided by the HEIGHT
// 3 & 4. The NEAR and FAR clipping plane. 
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

render.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

// Let's make a Cube:
// BoxGeometry contains points (vertices) and fill (faces) of the Cube.
const geometry = new THREE.BoxGeometry();
// There are several materials in Three.js but for this we'll use MeshBasicMaterial
const material = new THREE.MeshBasicMaterial( { color: 0x2F2FD2 } );
// A mesh is an object that takes a geometry and applies a material to it.
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

camera.position.z = 5;

// Now let's render something with a render or animate loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate()