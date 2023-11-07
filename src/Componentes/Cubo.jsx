import  { useEffect, useRef } from 'react';
import * as THREE from 'three';


export function Model(){
  const cubeRef = useRef(null);   
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(300, 300);
    //document.getElementById("scene-container").appendChild();
    cubeRef.current.appendChild(renderer.domElement);
    
    
    const texture = new THREE.TextureLoader().load( '/src/assets/imagenes/banner1.jpg' );
				texture.colorSpace = THREE.SRGBColorSpace;
    
    const geometry = new THREE.BoxGeometry();
    //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 , map: texture});
    const material = new THREE.MeshBasicMaterial({ map: texture});
    
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z  = 1;
    
    //https://cdn.glitch.global/70d52efa-1e92-47b2-b983-a1fc93e0c26e/create.gif?v=1699386790661
    //renderer.render(scene, camera);
    
    var animate = () => {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();

    
    
    
    
  }, []);
  
  return (
    
        <div ref ={cubeRef}></div>
   
);
}
