//import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react' ;
//import aframe from '@ajwest/aframe';
//import io3d from 'io3fix';
//import 'aframe-animation-component';

import ReactDOM from 'react-dom';


//import './face-notifications';




   
  var App = React.createClass({     
  render: function() {
    return(         
      <div>          
       <a-scene>
      <a-entity> </a-entity>
    </a-scene>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.document.querySelector('#sceneContainer')
);
//export default Iframe;
