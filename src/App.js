import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import  '@ajwest/aframe';
import io3d from '3dio';
import 'aframe-animation-component';
import 'react';
import 'react-dom';
import '3dio';

import './face-notifications';

class App extends Component {
  render() {
    return (
       
   <Scene> // io3d-lighting="intensity:0.9">
       <io3d-app id="default_setup" scene-id="62cb3510-6708-4f62-94c3-f9936db7e20b"></io3d-app>
      <a-sky src="https://storage.3d.io/535e624259ee6b0200000484/2017-08-08_15-19-35_C6qRcB/empire_low.jpg" rotation="0 290 0"></a-sky>
      <a-entity position="-6.080855307214579 0 0" rotation="0 90 0" io3d-uuid="62cb3510-6708-4f62-94c3-f9936db7e20b" class="io3d-scene">
        <a-entity position="0 0 0" rotation="0 0 0" io3d-uuid="3e7b7c02-9332-4cf7-bb03-fcc38defa8fd">
          <a-entity io3d-data3d="key: /535e624259ee6b0200000484/bake/2017-06-30_11-05-49_P144IW/regular/lighting.gz.data3d.buffer; lightMapIntensity: 1.2; lightMapExposure: 0.7" shadow="cast: false; receive: true"></a-entity>
          <a-entity io3d-furniture="id: dfbf1720-51f5-4de2-8661-fdb657d17e63" shadow="cast: true; receive: false" position="-3.17 0 0.5" rotation="0 90 0" io3d-uuid="a8dcfde7-16f5-4fd0-a2c4-bfc4a040fed4"></a-entity>
        </a-entity>
      </a-entity>
      
    </Scene>
  
    );
  }
}

export default App;
