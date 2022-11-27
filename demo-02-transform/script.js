// size
const sizes = {
  width: 800,
  height: 600,
};

// create a scene
const scene = new THREE.Scene();

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: '#ff0000',
});
// Group - 可以通过group整体操作组内的元素
// const group = new THREE.Group();
// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1,1,1),
//   new THREE.MeshBasicMaterial({
//     color: 0xff0000
//   })
// )
// group.add(cube1)
// scene.add(group)
// group.position.x = 1
// group.scale.x = 1
// group.rotation.x = 1
const mesh = new THREE.Mesh(geometry, material);
// Position
// 初始化完以后可以放到任何地方修改position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.7, -0.6, 1);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// Rotation
// rotation.reorder设置三个轴的旋转顺序，结果会有不同
mesh.rotation.reorder('YXZ');
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

scene.add(mesh);

// axes helper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

// mesh.position.normalize();
// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// camera.position.x = 1;
// camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(3, 0, 0));
camera.lookAt(mesh.position);
// 获取物体和相机的距离
// console.log(mesh.position.distanceTo(camera.position));

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
