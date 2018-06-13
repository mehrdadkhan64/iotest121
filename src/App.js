import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import '@ajwest/aframe';

import './face-notifications';

class App extends Component {
  render() {
    return (
      <Scene>
      
      
       <Entity id="sphere" geometry="primitive: sphere"
                material="color: #EF2D5E; shader: flat"
                position="0 0.15 -5"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></Entity>
      <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
                material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
                scale="-1 1 1"></a-entity>
 
      <a-entity id="light" light="type: ambient; color: #888"></a-entity>
      
      </Scene>
    );
  }
}

export default App;
