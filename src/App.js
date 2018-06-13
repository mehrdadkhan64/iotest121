import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import '@ajwest/aframe';
import io3d from '3dio';



import './face-notifications';


class App extends Component {
  render() {
    return (

   <html>
    
<head>
  <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
  <script src="https://dist.3d.io/3dio-js/1.1.x/3dio.min.js"></script>
</head>
<body>
  <a-scene>
    
    <a-entity io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6" position="-2 0 -3.2" rotation="0 180 0"></a-entity>

    
    <a-entity io3d-data3d="key:/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer" position="0 0 0"></a-entity>
  </a-scene>
</body>
      </html>
    );
  }
}

export default App;
