# threeJs 学习笔记

素材地址：
https://gitee.com/alphardex/threejs-journey/tree/main
## DEMO-01-scene
THREE.Scene()  
  * 创建场景对象Scene  
  * docs/api/zh/scenes/Scene  
  
THREE.BoxGeometry(1, 1, 1)  
  * BoxGeometry是四边形的原始几何类  
  * docs\api\zh\geometries  
  
THREE.MeshBasicMaterial({color: '#ff0000'})  
  * 基础网格材质，不受光照影响的材质  
  * docs/api/zh/materials/MeshBasicMaterial  
  
THREE.Mesh(geometry, material)  
  * docs/api/zh/objects/Mesh  
  
THREE.PerspectiveCamera(75, sizes.width / sizes.height)  
  * docs/api/zh/cameras/PerspectiveCamera  
  
THREE.WebGLRenderer({ canvas })  
  * docs/api/zh/renderers/WebGLRenderer  
  
renderer.render(scene, camera)  
  * .render ( scene : Scene, camera : Camera, renderTarget : WebGLRenderTarget, forceClear : Boolean ) : null
## DEMO-02-transform
THREE.Group()  
  * docs/api/zh/objects/Group  
  
THREE.AxesHelper()  
  * docs/api/zh/helpers/AxesHelper  
  
camera.lookAt()  
rotation.reorder()  
  * 设置三个轴的旋转渲染顺序，结果会有不同  

## DEMO-03-animation  
THREE.Clock()  
  * docs/api/zh/core/Clock  
  
gsap  
  * 最健全的web动画库之一  
  * https://zhuanlan.zhihu.com/p/145332205  

## DEMO-04-camera  
new OrbitControls()  
  * docs/examples/controls/OrbitControls  

## DEMO-05-fullscreen-and-resize
监听resize和dblclick，处理resize和全屏（兼容safari）  

## DEMO-06-geometry  
new THREE.BufferGeometry()  
  * docs/api/zh/core/BufferGeometry  

Float32Array  
  * 为什么使用Float32Array?  

## DEMO-07-texture  
new THREE.TextureLoader()
  * docs/api/zh/loaders/TextureLoader