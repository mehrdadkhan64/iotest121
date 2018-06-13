import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

import './face-notifications';

class App extends Component {
  render() {
    return (
      <Scene>
        <Entity camera='user-height: 1.6' look-controls='' face-notifications=''>
          <Entity
          geometry={{primitive: 'box', width: 0.2, height: 0.2, depth: 0.2}} material={{color: 'blue'}}
          position={{x: 0, y: 0, z: -1}} />
        </Entity>
        <Entity
          geometry={{primitive: 'box'}} material={{color: 'red'}}
          position={{x: 0, y: 0, z: -1}} />
       <a-entity id="sphere" geometry="primitive: sphere"
                material="color: #EFEFEF; shader: flat"
                position="0 0.15 -5"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></a-entity>
      
      </Scene>
    );
  }
}

export default App;
