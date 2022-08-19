import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function App() {
  const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5);
document.body.innerHTML='';
document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe: true});
const box = new THREE.Mesh(boxGeometry,material);
scene.add(box);

renderer.render(scene,camera);
  return (
null
  );
}

export default App;
