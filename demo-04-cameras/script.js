import { OrbitControls } from '../assets/js/controls/OrbitControls.js';
const sizes = {
  width: 800,
  height: 600,
};
const scene = new THREE.Scene();

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
  })
);

scene.add(cube);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.lookAt(cube.position);
scene.add(camera);

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
const controls = new OrbitControls(camera, canvas);
// controls.target.y = 2;
controls.enableDamping = true;

// Animation
const tick = () => {
  // update controls
  controls.update();

  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
