//import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react' ;
//import aframe from '@ajwest/aframe';
//import io3d from 'io3fix';
//import 'aframe-animation-component';

import ReactDOM from 'react-dom';


//import './face-notifications';




   
  var Iframe = React.createClass({     
  render: function() {
    return(         
      <div>          
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
      </div>
    )
  }
});

ReactDOM.render(
  <Iframe src="https://spaces.archilogic.com/3d/meh/7hlh09yw?modelResourceId=b44c35dd-f3f1-43a1-aef2-ab757c66d63f&mode=view&autostart=true&view-menu=none&main-menu=interior&presentation=once" height="500" width="500"/>,
  document.getElementById('root')
);

//export default Iframe;
