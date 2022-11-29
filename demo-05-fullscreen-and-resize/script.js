import { OrbitControls } from '../assets/js/controls/OrbitControls.js';
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
window.addEventListener('resize', () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(sizes.width, sizes.height);
});

window.addEventListener('dblclick', () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;
  // 兼容safari
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen;
    }
  }
});
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);
const controls = new OrbitControls(camera, canvas);
// 禁用控制
// controls.enabled = false;
// controls.target.y = 2;
controls.enableDamping = true;

// Animation
const tick = () => {
  // update controls
  controls.update();

  // render
  renderer.render(scene, camera);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  window.requestAnimationFrame(tick);
};

tick();
