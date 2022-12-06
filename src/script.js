import { OrbitControls } from '../assets/js/controls/OrbitControls.js';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

// geometry
const geometry = new THREE.BufferGeometry();
console.log('geometry', geometry);
const count = 200;
const positionArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
  positionArray[i] = (Math.random() - 0.5) * 4;
}
const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
// 新版threeJS中使用addAttribute，老版用setAttribute
geometry.addAttribute('position', positionAttribute);

const meterials = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, meterials);
scene.add(cube);

// camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 3;
camera.lookAt(cube.position);
scene.add(camera);

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
