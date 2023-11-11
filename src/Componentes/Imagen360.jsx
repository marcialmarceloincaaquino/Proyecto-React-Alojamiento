import "https://aframe.io/releases/1.4.0/aframe.min.js";
import  { useEffect, useRef } from 'react';
import siglo from '/src/assets/imagenes/banner1.jpg';

export function Img360 (){
    const imagen360 = useRef(null);   
    useEffect(() => 
    {
        <div style="width: 100px; height: 100px; overflow: auto;">
        <a-scene embedded>
          <a-sky src={siglo} rotation="10 -130 0" segments-height="30"></a-sky>
    
          <a-text font="kelsonsans" value="Puy de Sancy, France" width="6" position="-2.5 0.25 -1.5"
                  rotation="0 15 0"></a-text>
        </a-scene>
    </div>
    }, []);
    
    return (
      
          <div ref ={imagen360}></div>
     
  );
  }
