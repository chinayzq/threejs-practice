import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import * as dat from 'lil-gui';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

const meterials = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

const cube = new THREE.Mesh(geometry, meterials);
scene.add(cube);

// camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 3;
camera.lookAt(cube.position);
scene.add(camera);

/**
 * Debug
 */
const gui = new dat.GUI();
// gui.add(cube.position, 'y');
gui.add(cube.position, 'y', -3, 3, 0.01);
gui.add(meterials, 'wireframe');
// const parameters = {
//   color: 0xff0000,
// };

// gui.addColor(parameters, 'color').onChange(() => {
//   meterials.color.set(parameters.color);
// });

const parameters = {
  color: 0xff0000,
  spin: () => {
    gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + Math.PI * 2 });
  },
};
gui.add(parameters, 'spin');
// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
