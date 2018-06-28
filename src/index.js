//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import Iframe from './Iframe';


/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  */

/*ReactDOM.render(
  <App src="http://plnkr.co/" height="500" width="500"/>,
  document.getElementById('root')
);*/


//import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react' ;
//import aframe from '@ajwest/aframe';
//import io3d from 'io3fix';
//import 'aframe-animation-component';
import io3d from'3dio';
var a="535e624259ee6b0200000484/bake/2017-06-30_11-05-49_P144IW/regular/lighting.gz.data3d.buffer";
import ReactDOM from 'react-dom';
//import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';

//import './face-notifications';
var file = new Blob(['Hello World'])
file.name = 'hello.txt'

io3d.storage.put(file).then(function (a) {
  console.log('the data3d.buffer is now at', 'https://storage.3d.io' + a)
})
  
   
  class App extends React.Component {
  render () {
    return (
            
       
   /**  
       <a-assets>
    <a-asset-item id="scene" src="https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Fscene.gltf?1530000604454"></a-asset-item>
  </a-assets>

  <a-entity gltf-model-next="#scene" animation-mixer></a-entity> **/
 //     <a-entity gltf-model="url(https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Fscene.gltf?1530000604454)" animation-mixer></a-entity>
     <a-scene class="fullscreen" renderer="gammaOutput: true">
      <a-entity camera tour="autoStart: true" wasd-controls look-controls position="-8.63241676763491 1.654736886045699 2.85387460856602" rotation="0 637.1631515151513 0">
        <a-entity tour-waypoint="Top" io3d-uuid="afd09d80-52aa-4653-ada2-7c7a86b77f67" position="-7.062331439827951 11.091384479008408 -0.4470912971178591" rotation="-89 630 0"></a-entity>
        <a-entity tour-waypoint="Perspective" io3d-uuid="f68840e8-8f7e-4b5e-9d34-264774a67460" position="-14.117650973965459 12.388166892583516 -5.631058831124277" rotation="-58.52813852813858 591.6883116883115 0"></a-entity>
        <a-entity tour-waypoint="Hallway" io3d-uuid="795faf2a-3d02-4122-84bd-d057462f80da" position="-9.599132436038229 1.4519497089510565 -2.3510238434824586" rotation="0 568.1109610389608 0"></a-entity>
        <a-entity tour-waypoint="Bedroom" io3d-uuid="4287e27a-671f-4c35-aa63-ca8e674cd6b8" position="-8.79082260319921 1.37 -0.18202637207733116" rotation="0 489.09090909090884 0"></a-entity>
        <a-entity tour-waypoint="Bar" io3d-uuid="b8b41f7b-a7a4-453a-a066-6cbf836b8803" position="-8.63241676763491 1.654736886045699 2.8538746085660205" rotation="0 637.1631515151513 0"></a-entity>
        <a-entity tour-waypoint="Kitchen" io3d-uuid="cf01cab5-73a7-4521-b6d0-bdcc55a604d1" position="-4.2218996290346675 1.654736886045699 3.1766511029222366" rotation="0 409.63068398268376 0"></a-entity>
        <a-entity tour-waypoint="Work" io3d-uuid="a9912abf-3613-4b33-8c3b-c6f04790f8e2" position="-2.626520752179499 1.4532572292240002 2.09424695939594" rotation="2.4891774891774885 370.34496969696954 0"></a-entity>
        <a-entity tour-waypoint="Living" io3d-uuid="5375d7f6-f214-441a-b5f6-095b49250e3d" position="-4.9460776708559715 1.453691536003211 0.8671884831111247" rotation="0 689.9770043290041 0"></a-entity>
        <a-entity tour-waypoint="Bath" io3d-uuid="29492ca6-96f2-4a46-b8d9-b8649bc4180f" position="-4.664880978737893 8 -1.6410553232675535" rotation="-76.53679653679654 429.803844155844 0"></a-entity>
        <a-entity tour-waypoint="Top" io3d-uuid="e8b8c519-4414-46c4-b7e8-61cccd9d1f23" position="-7.062331439827951 11.091384479008408 -0.4470912971178591" rotation="-89 630 0"></a-entity>
        <a-entity tour-waypoint="Top" io3d-uuid="aa645424-0f1c-4974-8c20-53ad9f77e16b" position="-7.062331439827951 11.091384479008408 -0.4470912971178591" rotation="-89 630 0"></a-entity>
      </a-entity>
      <a-sky></a-sky>
      <a-entity position="-6.080855307214579 0 0" rotation="0 180 0" io3d-uuid="abe33c4d-03e8-4d04-83d1-ab4e16743036" class="io3d-scene">
        <a-entity position="0 0 0" rotation="0 0 0" io3d-uuid="c4d919b3-7e4e-40b8-bc48-28c0334be4b2">
     
  <a-entity gltf-model="url(https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Fscene%20(2).gltf?1530111643832)" position="0 0 0" rotation="0 0 0"></a-entity>
        </a-entity>
      </a-entity>
          
      </a-scene>
 

    )
  }
};
  
                                
                                
ReactDOM.render(
  <App/>,
  document.querySelector('#sceneContainer')
);
