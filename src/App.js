//import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react' ;
//import aframe from '@ajwest/aframe';
//import io3d from 'io3fix';
//import 'aframe-animation-component';




import './face-notifications';




   
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
  <Iframe src="http://plnkr.co/" height="500" width="500"/>,
  document.getElementById('example')
);
 
  

export default App;
