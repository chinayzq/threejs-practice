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
scene.add(camera);

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();
// Animation
const tick = () => {
  // getElapsedTime 实时获取clock初始化后的时间，并赋值给Object
  const elapsedTime = clock.getElapsedTime();
  // update Object
  // cube.rotation.y = elapsedTime;
  cube.position.y = Math.sin(elapsedTime);
  cube.position.x = Math.cos(elapsedTime);
  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
