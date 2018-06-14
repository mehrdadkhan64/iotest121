//import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react' ;
//import aframe from '@ajwest/aframe';
//import io3d from 'io3fix';
//import 'aframe-animation-component';




import './face-notifications';


class App extends Component {
  render() {
    return (

   <div>

      <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
  <script src="https://dist.3d.io/3dio-js/1.1.x/3dio.min.js"></script>
       <script src="https://unpkg.com/aframe-animation-component@3.2.5/dist/aframe-animation-component.min.js"></script>
       
   
    <title>Treasure Hunt</title>
  
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    
      <a-scene>
        <a-ntity io3d-data3d="url:https://storage.3d.io/535e624259ee6b0200000484/170725-1421-wujxjb/archilogic_2017-07-25_14-19-02_hn9axa.gz.data3d.buffer"
                  position="6.031 0 0.145">
          <a-camera id="camera" position="-6.085 0 0" rotation="0 0 0" wasd-controls="enabled: false">
            <a-entity id="hud"></a-entity>
            <a-entity cursor="fuse: true; fuseTimeout: 2000"
                      raycaster="objects:.clickable; far: 3"
                      position="0 0 -1"
                      geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.05"
                      material="color: black; shader: flat">
              <a-animation begin="click" easing="ease-in" attribute="scale" dur="150"
                           fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
              <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale" dur="2000"
                           fill="backwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
            </a-entity>
          </a-camera>
          <a-entity walking-trail position="-6.085 0 0">
            <a-entity walking-trail-item position="-0.441 0 -1.125"></a-entity>
            <a-entity walking-trail-item position="-0.296 0 2.027"></a-entity>
            <a-entity walking-trail-item position="-3.594 0 -1.190"></a-entity>
            <a-entity walking-trail-item position="-3.594 0 -3.829"></a-entity>
            <a-entity walking-trail-item position="-3.594 0 -4.883"></a-entity>
            <a-entity walking-trail-item position="-2.001 0 -3.829"></a-entity>
            <a-entity walking-trail-item position="0.095 0 -4.883"></a-entity>
            <a-entity walking-trail-item position="3.020 0 -4.883"></a-entity>
          </a-entity>
        </a-ntity>
        <a-entity clues-component=""></a-entity>
      </a-scene>
    </div>
    
 
    );
  }
}

export default App;
