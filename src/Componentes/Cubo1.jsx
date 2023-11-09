import  { useEffect, useRef } from 'react';
import * as THREE from 'three';
import siglo from  '/src/assets/imagenes/siglo xx.jpg';

export function Model1(){
  const cubeRef1 = useRef(null);   
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({});
    
    renderer.setSize(300, 300);
    cubeRef1.current.appendChild(renderer.domElement);
    
    
    const texture = new THREE.TextureLoader().load(siglo);
				texture.colorSpace = THREE.SRGBColorSpace;
    
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({ map: texture});
    
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z  = 1;

    function animate() {
      requestAnimationFrame( animate );
    
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    
      renderer.render( scene, camera );
    }
    
    animate();

    
  }, []);
  
  return (
    
        <div ref ={cubeRef1}></div>
   
);
}