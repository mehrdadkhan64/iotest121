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

import ReactDOM from 'react-dom';
import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';

//import './face-notifications';




   
  class App extends React.Component {
  render () {
    return (
      <div>          
       <a-scene>
      <a-entity gltf-model="url(https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Fscene.gltf?1530000604454)"></a-entity>
    </a-scene>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.querySelector('#sceneContainer')
);
