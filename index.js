import './style.css'
import * as THREE from 'three';
import { Camera } from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1 ,1000);

const renderer =new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);
renderer.render(scene,camera);

const geometry = new THREE.TorusKnotGeometry(10,3,200,30)
const material =new THREE.MeshStandardMaterial({color:0x3F709D})
const torus =new THREE.Mesh(geometry,material);

scene.add(torus)



const pointLight = new THREE.PointLight(0xffffff)
//const lightHelper = new THREE.PointLightHelper(pointLight1)
//const gridHelper = new THREE.GridHelper(200,50)
//scene.add(lightHelper,gridHelper)
 
//const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.1,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff})
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star)
}

Array(600).fill().forEach(addStar)
const spaceTexture = new THREE.TextureLoader().load('icons/space.jpg');
scene.background = spaceTexture;

torus.rotation.x=80

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.000;
  torus.rotation.y += 0.000;
  torus.rotation.z += 0.01;

  //controls.update();

  pointLight.position.copy(camera.position);
  pointLight.position.z+=10;
  scene.add(pointLight)
  camera.position.x+=.0;
  camera.position.z+=.04;
  renderer.render(scene,camera);
}

animate()

function moveCamera(){
  const t= document.body.getBoundingClientRect().top;
  camera.position.x=t*.001;
  camera.position.y=t*.005;
}

document.body.onscroll = moveCamera

function onWindowResize() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1 ,1000);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.position.setZ(30);
  renderer.render(scene,camera);
}
window.addEventListener('resize', onWindowResize);

