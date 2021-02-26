import * as THREE from 'three';

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
