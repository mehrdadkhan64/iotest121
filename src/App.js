//import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react' ;
//import aframe from '@ajwest/aframe';
//import io3d from 'io3fix';
//import 'aframe-animation-component';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';
import ReactDOM from 'react-dom';


//import './face-notifications';




   
  class App extends React.Component {
  render () {
    return (
      <div>          
       <a-scene>
    //  <a-entity gltf-model="url(/path/to/tree.gltf)"></a-entity>
    </a-scene>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.document.querySelector('#sceneContainer')
);
//export default Iframe;
