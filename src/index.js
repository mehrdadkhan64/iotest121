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
//import io3d from'3dio';
//var io3d = require('./3dio.min');
var a='/535e624259ee6b0200000484/bake/2017-06-30_11-05-49_P144IW/regular/lighting.gz.data3d.buffer';
import ReactDOM from 'react-dom';
//import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene} from 'react-aframe-ar';
//import './face-notifications';
 //window.IO3D = io3d;
//window.io3d=io3d;


/*var file = new Blob(['Hello World'])
file.name = 'hello.txt'

io3d.storage.put("https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Flighting.data3d.buffer?1530159041044").then(function (a) {
  console.log('the data3d.buffer is now at', 'https://storage.3d.io' + a)
})*/
  

/**  
       <a-assets>
    <a-asset-item id="scene" src="https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Fscene.gltf?1530000604454"></a-asset-item>
  </a-assets>

  <a-entity gltf-model-next="#scene" animation-mixer></a-entity> **/
 //     <a-entity gltf-model="url(https://cdn.glitch.com/084b0c74-174c-4649-86d2-7db8152333d9%2Fscene.gltf?1530000604454)" animation-mixer></a-entity>
     //<a-scene hoo121 class="fullscreen" renderer="gammaOutput: true">
     /* <a-entity camera tour="autoStart: true" wasd-controls look-controls position="-8.63241676763491 1.654736886045699 2.85387460856602" rotation="0 637.1631515151513 0">
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
         */ 
       
       
   
  class App extends React.Component {
  render () {
    return (
            
    <div>
      
      <a-scene hoo121 class="fullscreen" renderer="gammaOutput: true">
   
      </a-scene>

 
     
  </div>   
    )
  }
};
 

const element3d ={
  "h": 2.4,
  "x": -6.080855307214579,
  "y": 0,
  "z": 0,
  "ry": 90,
  "lock": false,
  "type": "plan",
  "saved": true,
  "scale": 1,
  "skyMap": "",
  "version": 1,
  "children": [
    {
      "x": 0,
      "y": 0,
      "z": 0,
      "id": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "ry": 0,
      "lock": true,
      "type": "level",
      "scale": 1,
      "locked": true,
      "children": [
        {
          "h": 0.2,
          "l": 24.631274069459103,
          "w": 34.83760310376536,
          "x": 0,
          "y": 0,
          "z": 0,
          "id": "312d2b2a-804a-4d81-8659-b123ca7dd7d3",
          "ry": 0,
          "file": "/5ba2d279-cae7-4ee5-ae79-80278c1d0cb3/170308-1516-pcl7c8/floorplan.jpg",
          "lock": false,
          "type": "floorplan",
          "xRay": false,
          "locked": true,
          "visible": {
            "bird": false,
            "person": false,
            "floorplan": false
          },
          "children": []
        },
        {
          "h": 2.4,
          "l": 6.85,
          "w": 0.15,
          "x": -1.15,
          "y": 0,
          "z": -7,
          "id": "ff3f211b-00d7-4337-adb1-8554fa6956ed",
          "ry": 270,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2,
              "l": 0.9,
              "v": 3,
              "w": 0.15,
              "x": 2.3,
              "y": 0,
              "z": 0,
              "id": "167f74af-6e22-4447-a418-278bac49dc6b",
              "ry": 0,
              "bake": true,
              "lock": false,
              "side": "front",
              "type": "door",
              "hinge": "right",
              "children": [],
              "doorType": "singleSwing",
              "doorAngle": 92,
              "leafWidth": 0.03,
              "materials": {
                "leaf": "doorLeaf-flush-white",
                "frame": {
                  "colorDiffuse": [
                    0.95,
                    0.95,
                    0.95
                  ],
                  "specularCoef": 30,
                  "colorSpecular": [
                    0.04,
                    0.04,
                    0.04
                  ]
                },
                "handle": "aluminium",
                "threshold": {
                  "size": [
                    3,
                    3
                  ],
                  "colorDiffuse": [
                    0.69,
                    0.69,
                    0.69
                  ],
                  "specularCoef": 1,
                  "colorSpecular": [
                    0.667,
                    0.667,
                    0.667
                  ],
                  "receiveRealTimeShadows": true
                }
              },
              "threshold": true,
              "bakeStatus": "done",
              "leafOffset": 0.005,
              "frameLength": 0.05,
              "frameOffset": 0,
              "fixLeafRatio": 0.3,
              "thresholdHeight": 0.01
            },
            {
              "h": 2,
              "l": 0.9,
              "v": 3,
              "w": 0.15,
              "x": 3.45,
              "y": 0,
              "z": 0,
              "id": "46b8e9f2-3f87-4c56-a083-fcfcdf2978fc",
              "ry": 0,
              "bake": true,
              "lock": false,
              "side": "front",
              "type": "door",
              "hinge": "left",
              "children": [],
              "doorType": "singleSwing",
              "doorAngle": 92,
              "leafWidth": 0.03,
              "materials": {
                "leaf": "doorLeaf-flush-white",
                "frame": {
                  "colorDiffuse": [
                    0.95,
                    0.95,
                    0.95
                  ],
                  "specularCoef": 30,
                  "colorSpecular": [
                    0.04,
                    0.04,
                    0.04
                  ]
                },
                "handle": "aluminium",
                "threshold": {
                  "size": [
                    3,
                    3
                  ],
                  "colorDiffuse": [
                    0.69,
                    0.69,
                    0.69
                  ],
                  "specularCoef": 1,
                  "colorSpecular": [
                    0.667,
                    0.667,
                    0.667
                  ],
                  "receiveRealTimeShadows": true
                }
              },
              "threshold": true,
              "bakeStatus": "done",
              "leafOffset": 0.005,
              "frameLength": 0.05,
              "frameOffset": 0,
              "fixLeafRatio": 0.3,
              "thresholdHeight": 0.01
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "x": -3.72,
          "y": 0,
          "z": 1.19,
          "id": "5c3ca2c9-fb31-4d2a-bd50-a85b97290ac0",
          "ry": 180,
          "src": "!859cee91-c04b-4f2c-99ac-960825459be2",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 2.45,
          "w": 0.7,
          "x": 5.15,
          "y": 0,
          "z": 7.4,
          "id": "8d887f4f-673e-4c71-be85-8dba86fb2ddb",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.1,
          "w": 0.3,
          "x": 5.15,
          "y": 0,
          "z": 5.25,
          "id": "1cb0e801-b9ef-4783-8e3f-dee8cb8755cb",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 3.25,
          "w": 0.3,
          "x": 3.05,
          "y": 0,
          "z": 4.95,
          "id": "0f65f2ba-9d2d-4f91-a974-e4e479989240",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2,
              "l": 1,
              "v": 3,
              "w": 0.3,
              "x": 1.55,
              "y": 0,
              "z": 0,
              "id": "96654772-b788-48aa-aff5-0f54cdda5ff9",
              "ry": 0,
              "bake": true,
              "lock": false,
              "side": "back",
              "type": "door",
              "hinge": "left",
              "children": [],
              "doorType": "singleSwing",
              "doorAngle": 0,
              "leafWidth": 0.03,
              "materials": {
                "leaf": "doorLeaf-flush-white",
                "frame": {
                  "colorDiffuse": [
                    0.95,
                    0.95,
                    0.95
                  ],
                  "specularCoef": 30,
                  "colorSpecular": [
                    0.04,
                    0.04,
                    0.04
                  ]
                },
                "handle": "aluminium",
                "threshold": {
                  "size": [
                    3,
                    3
                  ],
                  "colorDiffuse": [
                    0.69,
                    0.69,
                    0.69
                  ],
                  "specularCoef": 1,
                  "colorSpecular": [
                    0.667,
                    0.667,
                    0.667
                  ],
                  "receiveRealTimeShadows": true
                }
              },
              "threshold": true,
              "bakeStatus": "done",
              "leafOffset": 0.005,
              "frameLength": 0.05,
              "frameOffset": 0,
              "fixLeafRatio": 0.3,
              "thresholdHeight": 0.01
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 3.15,
          "w": 0.6,
          "x": 3.05,
          "y": 0,
          "z": 2.3,
          "id": "7df12a47-d9c1-459d-91ac-5f596863cc1f",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 10.75,
          "w": 0.25,
          "x": -0.1,
          "y": 0,
          "z": 1.7,
          "id": "986405a4-2de3-4e73-baba-3ee5c270a0b7",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 0.6,
          "w": 0.35,
          "x": 0.15,
          "y": 0,
          "z": -9.05,
          "id": "abf46e80-7597-4658-938a-ccf38911cebd",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.55,
          "w": 0.35,
          "x": 0.75,
          "y": 0,
          "z": -9.05,
          "id": "1022d629-1e7c-494f-a3b0-b7bc09f5b005",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.95,
          "w": 0.2,
          "x": 3.1,
          "y": 0,
          "z": -9.05,
          "id": "ce83305c-833a-4dee-aa69-a400ea81c080",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.35,
          "w": 0.55,
          "x": 3.1,
          "y": 0,
          "z": -11.45,
          "id": "61c0bbed-01c4-4a11-a234-6dcc7b4723e6",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 6.1,
          "w": 0.55,
          "x": 0.75,
          "y": 0,
          "z": -11.45,
          "id": "7971c904-b1a8-4290-bd69-6883028cb25f",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 18.64,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": -11.45,
          "id": "4d08c545-5169-40b1-bb9d-49f42ea0827d",
          "ry": 270,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2.4,
              "l": 0.6,
              "x": 0,
              "y": 0,
              "z": 0,
              "id": "eb08b471-8d10-4214-ab16-fc80e38d2c32",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 0.6,
              "y": 0,
              "z": 0,
              "id": "c3c6ee8a-7e09-45dc-8b9d-3ce7f9baaa56",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 1.95,
              "y": 0,
              "z": 0,
              "id": "fbb3f501-63f7-4fe0-871b-fd60bd0f2154",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 3.3,
              "y": 0,
              "z": 0,
              "id": "808f7a1c-e8c5-4601-b6d0-c69a5d2c3c1d",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 4.65,
              "y": 0,
              "z": 0,
              "id": "146e1b52-3d52-409b-b9a3-ea607ac821dc",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 6,
              "y": 0,
              "z": 0,
              "id": "57bf5b0f-bf46-462a-9ebc-e1017ebf1fb1",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 7.35,
              "y": 0,
              "z": 0,
              "id": "cc1efa0a-b50c-404a-8d71-261eb1bb0905",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 8.7,
              "y": 0,
              "z": 0,
              "id": "5d1d4aa3-e8e5-446b-8a39-454e156b9e8a",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 10.05,
              "y": 0,
              "z": 0,
              "id": "3afe9665-d2fa-4ad0-88a5-81af1723476b",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 11.4,
              "y": 0,
              "z": 0,
              "id": "949a9d75-4a64-4586-ad07-a6532d565d1f",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 12.75,
              "y": 0,
              "z": 0,
              "id": "9fa975fc-ed73-4397-9647-e18952968234",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 14.1,
              "y": 0,
              "z": 0,
              "id": "53c753c8-49fd-45bf-8730-d3f19f6a173d",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 15.45,
              "y": 0,
              "z": 0,
              "id": "6f64eb6a-0ecc-4e14-879e-85eaa4637d7a",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.4,
              "x": 16.8,
              "y": 0,
              "z": 0,
              "id": "8691a090-474d-422e-ac6b-6c9f4781c880",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 0.5,
              "x": 18.2,
              "y": 0,
              "z": 0,
              "id": "cbd63107-715c-4714-a3fb-3067d16f9375",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 0.15,
              "x": 18.7,
              "y": 0,
              "z": 0,
              "id": "3b1a9ecc-06a2-46a0-aa00-2606dc774aa1",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.08,
              "columnRatios": [
                [
                  1
                ]
              ]
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": {
              "size": [
                0.8,
                3
              ],
              "mapNormal": "archilogic/tex/af2ce3936272199e72b91a52cd032d38.hi-res.gz.dds",
              "mapDiffuse": "archilogic/tex/d8572227e2a76395a528e0462cf5b895.hi-res.gz.dds",
              "mapSpecular": "archilogic/tex/ade515c7810e38629f1c5992570d5c44.hi-res.gz.dds",
              "specularCoef": 50,
              "colorSpecular": [
                0.025,
                0.025,
                0.025
              ],
              "mapNormalSource": "archilogic/tex/af2ce3936272199e72b91a52cd032d38.source.jpg",
              "mapDiffuseSource": "archilogic/tex/d8572227e2a76395a528e0462cf5b895.source.jpg",
              "mapNormalPreview": "archilogic/tex/af2ce3936272199e72b91a52cd032d38.lo-res.jpg",
              "mapDiffusePreview": "archilogic/tex/d8572227e2a76395a528e0462cf5b895.lo-res.jpg",
              "mapSpecularSource": "archilogic/tex/ade515c7810e38629f1c5992570d5c44.source.jpg",
              "mapSpecularPreview": "archilogic/tex/ade515c7810e38629f1c5992570d5c44.lo-res.jpg"
            },
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 10.3,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": 7.2,
          "id": "ad53891f-6267-4ee2-a0b5-4f3f7d90bc79",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2.4,
              "l": 1.1,
              "x": 0,
              "y": 0,
              "z": 0,
              "id": "ad51b622-e680-4404-9aa9-71c1ee96ed10",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 1.1,
              "y": 0,
              "z": 0,
              "id": "1d41b81a-2f03-474f-9f76-ad8f08b696d3",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 2.45,
              "y": 0,
              "z": 0,
              "id": "e57582ad-be3d-4615-9e98-58473355503e",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 3.8,
              "y": 0,
              "z": 0,
              "id": "814634f1-0b8e-4cde-8652-4f95ae348c14",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 5.15,
              "y": 0,
              "z": 0,
              "id": "77dcb75b-67a9-4cb4-bdc9-8277c2cc350b",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 6.5,
              "y": 0,
              "z": 0,
              "id": "24fd0138-28d4-4877-af17-522970cb6af2",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.35,
              "x": 7.85,
              "y": 0,
              "z": 0,
              "id": "19a6a812-7d03-420d-8592-7a1d4e0e3510",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.4,
              "l": 1.05,
              "x": 9.2,
              "y": 0,
              "z": 0,
              "id": "31347c8a-ce63-468b-81b7-fc4123fcaec7",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ],
                  "specularCoef": 59,
                  "colorSpecular": [
                    0.212,
                    0.212,
                    0.212
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.2,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1.25,
          "w": 0.35,
          "x": 3.05,
          "y": 0,
          "z": 5.25,
          "id": "a08ab3c5-4481-402f-9ba0-1c8d45d9526b",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.4,
          "w": 0.15,
          "x": 0.85,
          "y": 0,
          "z": -11.45,
          "id": "e2452ea0-6ea3-4589-893f-35a96c2c4e59",
          "ry": 270,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2,
              "l": 0.9,
              "v": 3,
              "w": 0.15,
              "x": 0.8,
              "y": 0,
              "z": 0,
              "id": "693d180d-ecef-4b47-a8b9-3305ecb516e0",
              "ry": 0,
              "bake": true,
              "lock": false,
              "side": "back",
              "type": "door",
              "hinge": "right",
              "children": [],
              "doorType": "singleSwing",
              "doorAngle": 92,
              "leafWidth": 0.03,
              "materials": {
                "leaf": "doorLeaf-flush-white",
                "frame": {
                  "colorDiffuse": [
                    0.95,
                    0.95,
                    0.95
                  ],
                  "specularCoef": 30,
                  "colorSpecular": [
                    0.04,
                    0.04,
                    0.04
                  ]
                },
                "handle": "aluminium",
                "threshold": {
                  "size": [
                    2,
                    2
                  ],
                  "colorDiffuse": [
                    0.69,
                    0.69,
                    0.69
                  ],
                  "specularCoef": 1,
                  "colorSpecular": [
                    0.6,
                    0.6,
                    0.6
                  ],
                  "receiveRealTimeShadows": true
                }
              },
              "threshold": true,
              "bakeStatus": "done",
              "leafOffset": 0.005,
              "frameLength": 0.05,
              "frameOffset": 0,
              "fixLeafRatio": 0.3,
              "thresholdHeight": 0.01
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1.3,
          "w": 0.15,
          "x": -1.4,
          "y": 0,
          "z": -9.05,
          "id": "1f8baa7f-937a-403d-80b0-6f5016d0c633",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.9,
          "w": 0.85,
          "x": -5.15,
          "y": 0,
          "z": -7.85,
          "id": "ff8e9845-d430-4bad-a4b5-0cfba89cdb7f",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.15,
          "w": 0.15,
          "x": -2.25,
          "y": 0,
          "z": -7.15,
          "id": "08827460-2d55-4a5f-89a4-242659bf86d7",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2,
              "l": 0.9,
              "v": 3,
              "w": 0.15,
              "x": 1.15,
              "y": 0,
              "z": 0,
              "id": "ecf4dbff-00c0-4a9f-ad57-635c25fc7758",
              "ry": 0,
              "bake": true,
              "lock": false,
              "side": "back",
              "type": "door",
              "hinge": "left",
              "children": [],
              "doorType": "singleSwing",
              "doorAngle": 92,
              "leafWidth": 0.03,
              "materials": {
                "leaf": "doorLeaf-flush-white",
                "frame": {
                  "colorDiffuse": [
                    0.95,
                    0.95,
                    0.95
                  ],
                  "specularCoef": 30,
                  "colorSpecular": [
                    0.04,
                    0.04,
                    0.04
                  ]
                },
                "handle": "aluminium",
                "threshold": {
                  "size": [
                    3,
                    3
                  ],
                  "colorDiffuse": [
                    0.69,
                    0.69,
                    0.69
                  ],
                  "specularCoef": 1,
                  "colorSpecular": [
                    0.667,
                    0.667,
                    0.667
                  ],
                  "receiveRealTimeShadows": true
                }
              },
              "threshold": true,
              "bakeStatus": "done",
              "leafOffset": 0.005,
              "frameLength": 0.05,
              "frameOffset": 0,
              "fixLeafRatio": 0.3,
              "thresholdHeight": 0.01
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.85,
          "w": 0.85,
          "x": -5.15,
          "y": 0,
          "z": 1.5,
          "id": "64403857-ac08-4e13-b3f0-f035f025e24c",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1.8,
          "w": 0.15,
          "x": -2.45,
          "y": 0,
          "z": 1.5,
          "id": "2d08c19c-0603-4737-a5cc-8c7a22643bb0",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2,
              "l": 0.85,
              "v": 3,
              "w": 0.15,
              "x": 0.75,
              "y": 0,
              "z": 0,
              "id": "d7dbff82-4f37-4bf8-861e-06188a3e5a86",
              "ry": 0,
              "bake": true,
              "lock": false,
              "side": "back",
              "type": "door",
              "hinge": "left",
              "children": [],
              "doorType": "singleSwing",
              "doorAngle": 92,
              "leafWidth": 0.03,
              "materials": {
                "leaf": "doorLeaf-flush-white",
                "frame": {
                  "colorDiffuse": [
                    0.95,
                    0.95,
                    0.95
                  ],
                  "specularCoef": 30,
                  "colorSpecular": [
                    0.04,
                    0.04,
                    0.04
                  ]
                },
                "handle": "aluminium",
                "threshold": {
                  "size": [
                    3,
                    3
                  ],
                  "colorDiffuse": [
                    0.69,
                    0.69,
                    0.69
                  ],
                  "specularCoef": 1,
                  "colorSpecular": [
                    0.667,
                    0.667,
                    0.667
                  ],
                  "receiveRealTimeShadows": true
                }
              },
              "threshold": true,
              "bakeStatus": "done",
              "leafOffset": 0.005,
              "frameLength": 0.05,
              "frameOffset": 0,
              "fixLeafRatio": 0.3,
              "thresholdHeight": 0.01
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.7,
          "w": 0.15,
          "x": -2.45,
          "y": 0,
          "z": -0.15,
          "id": "f9dfaeb5-9954-46bf-9bea-311b5e421c94",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1,
          "w": 0.15,
          "x": -2.3,
          "y": 0,
          "z": -0.3,
          "id": "8a90ab5f-f40f-4ee5-afbf-bce7fa97d841",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 3.85,
          "w": 0.15,
          "x": -5.15,
          "y": 0,
          "z": -3.75,
          "id": "0dd0f5f1-c6eb-4a08-bca8-c51e90f56dc9",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1.05,
          "w": 0.4,
          "x": 2.05,
          "y": 0,
          "z": -9.45,
          "id": "b4ea52fa-87a3-4115-bd3d-9f6dbcf1ab16",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1,
          "w": 0.45,
          "x": -5.15,
          "y": 0,
          "z": 1.05,
          "id": "4ea957d0-e6ef-4fc8-8373-cc2f99c6d169",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 1.95,
          "w": 0.35,
          "x": 2.15,
          "y": 0,
          "z": 5.25,
          "id": "c8196a25-5723-46a6-9b36-4293b0c2e1dc",
          "ry": 270,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [
            {
              "h": 2.25,
              "l": 0.9,
              "x": 0.05,
              "y": 0.05,
              "z": 0,
              "id": "60c1dae3-1da2-4e4b-b57f-16a8a41984e3",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.06,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            },
            {
              "h": 2.25,
              "l": 1,
              "x": 0.95,
              "y": 0.05,
              "z": 0,
              "id": "e1084c64-c10c-4fb1-bcec-f4f19e1fa1bb",
              "ry": 0,
              "bake": true,
              "lock": false,
              "type": "window",
              "children": [],
              "materials": {
                "frame": {
                  "colorDiffuse": [
                    0.541,
                    0.541,
                    0.541
                  ]
                },
                "glass": "glass"
              },
              "rowRatios": [
                1
              ],
              "bakeStatus": "done",
              "frameWidth": 0.1,
              "frameLength": 0.04,
              "columnRatios": [
                [
                  1
                ]
              ]
            }
          ],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 0.2,
          "l": 2.1,
          "x": -2.277840000816019,
          "y": 0,
          "z": -9.558831036686556,
          "id": "b49fd3a5-35e7-44c1-ba32-a087aaf754cc",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              0.8777750008160194,
              0.6588385366865541
            ],
            [
              0.8777750008160194,
              0.5088235366865543
            ],
            [
              2.977832500816019,
              0.5088135366865547
            ],
            [
              2.977832500816019,
              -1.8911414633134438
            ],
            [
              -2.8721499991839816,
              -1.8911414633134438
            ],
            [
              -2.8721499991839816,
              1.7087885366865558
            ],
            [
              0.027985000816018513,
              1.7087885366865558
            ],
            [
              0.027985000816018513,
              2.4088235366865556
            ],
            [
              2.1778275008160173,
              2.4088235366865556
            ],
            [
              2.1778275008160173,
              0.6588385366865541
            ],
            [
              0.8777750008160194,
              0.6588385366865541
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "wood_parquet_oak_stained",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "h": 0.2,
          "x": -3.2249948630393126,
          "y": 0,
          "z": -5.374993408774717,
          "id": "c25b30ed-5957-40b3-a8f1-36df04d95d36",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              0.975139863039312,
              -1.6249990912252832
            ],
            [
              -1.9249951369606881,
              -1.6249640912252827
            ],
            [
              -1.9249951369606881,
              1.624985908774717
            ],
            [
              1.924987363039313,
              1.624985908774717
            ],
            [
              1.9249873630393128,
              -1.6249990912252832
            ],
            [
              0.975139863039312,
              -1.6249990912252832
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "wood_parquet_oak_stained",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "h": 0.2,
          "x": -3.2249987500000006,
          "y": 0,
          "z": -1.9499999999999997,
          "id": "6f1eda28-8681-49fb-b0a2-849db0e9e6d9",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              1.924991250000001,
              -1.6499924999999998
            ],
            [
              -1.9249912500000002,
              -1.6499924999999998
            ],
            [
              -1.9249912500000002,
              1.6499925000000002
            ],
            [
              1.9249912500000013,
              1.6499924999999998
            ],
            [
              1.924991250000001,
              -1.6499924999999998
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "wood_parquet_oak_stained",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "h": 0.2,
          "x": -1.1979953988811154,
          "y": 0,
          "z": 3.079999168490914,
          "id": "1b0d782f-216b-4e10-901d-bae7c0438c10",
          "ry": 449.6,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              3.2292007828409197,
              -0.12455902775391947
            ],
            [
              3.222219627261863,
              -1.124519658824855
            ],
            [
              0.7222464938214408,
              -1.106931267025696
            ],
            [
              0.7023489769552616,
              -3.95699431130714
            ],
            [
              -4.147480333245292,
              -3.9231355653781943
            ],
            [
              -4.098960766159119,
              3.0266675686944553
            ],
            [
              -1.799009629876193,
              3.0105656187463112
            ],
            [
              -1.7902827228938774,
              4.260582655970513
            ],
            [
              0.8096064180976911,
              4.242431710805678
            ],
            [
              0.7876144533295201,
              1.0923659775563093
            ],
            [
              10.087411330624125,
              1.0275850961733644
            ],
            [
              10.080081146936472,
              -0.022369316554684396
            ],
            [
              3.229913084768232,
              0.025454655208549937
            ],
            [
              3.2292007828409197,
              -0.12455902775391947
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "wood_parquet_oak",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "h": 0.2,
          "x": 3.6499915705115265,
          "y": 0,
          "z": 6.225003124999868,
          "id": "6079c25e-119e-4bbd-b307-d3cf2f246c97",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              -1.4999740705115268,
              0.9749868750001331
            ],
            [
              1.4999734294884735,
              0.9749868750001331
            ],
            [
              1.4999734294884735,
              -0.974988124999868
            ],
            [
              -1.4999740705115268,
              -0.9749856249998681
            ],
            [
              -1.4999740705115268,
              0.9749868750001331
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "concrete_beige",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "h": 0.2,
          "x": 1.924394851094266,
          "y": 0,
          "z": -10.334337045540837,
          "id": "8652ac0e-6b0e-40a3-a315-2377a873ab18",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              -1.0743873510942659,
              1.2843195455408356
            ],
            [
              0.12555264890573414,
              1.2843195455408356
            ],
            [
              0.12555264890573414,
              0.884317045540838
            ],
            [
              1.1755951489057341,
              0.884317045540838
            ],
            [
              1.1755951489057337,
              -1.115635454459163
            ],
            [
              -1.074387351094266,
              -1.115635454459163
            ],
            [
              -1.0743873510942659,
              1.2843195455408356
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "tiles-dark-large",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "h": 0.2,
          "x": -3.7044929268482725,
          "y": 0,
          "z": 0.6075660299679961,
          "id": "4b61f49d-3b9e-4217-a0d7-16e9ddd479a5",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "polyfloor",
          "polygon": [
            [
              -0.445457073151728,
              0.8923914700320039
            ],
            [
              1.2544854268482721,
              0.8923914700320039
            ],
            [
              1.2544854268482712,
              -0.7575585299679961
            ],
            [
              -1.4454970731517283,
              -0.7575585299679958
            ],
            [
              -1.4454970731517283,
              0.44241147003200365
            ],
            [
              -0.445457073151728,
              0.44241147003200365
            ],
            [
              -0.445457073151728,
              0.8923914700320039
            ]
          ],
          "children": [],
          "hCeiling": 2.4,
          "materials": {
            "top": "tiles-dark-large",
            "side": "plaster_smooth",
            "ceiling": "plaster_smooth_ceiling"
          },
          "bakeStatus": "done",
          "hasCeiling": true
        },
        {
          "x": -4.78,
          "y": 0,
          "z": 0.59,
          "id": "9a6cbe62-b4fe-49ec-a411-6e5383b3767a",
          "ry": 180,
          "src": "!20a7e6c3-5944-485c-849f-afbea11f43df",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "h": 2.2,
          "l": 0.68,
          "w": 0.02,
          "x": -4.17,
          "y": 0,
          "z": 1.05,
          "id": "205eeada-c9aa-4228-8b81-753f2af77578",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "box",
          "visible": {
            "bird": true,
            "person": true,
            "floorplan": true
          },
          "children": [],
          "materials": {
            "top": "glass-wall",
            "side": "glass-wall"
          },
          "bakeStatus": "done",
          "hideInBakedModel": false
        },
        {
          "h": 2.4,
          "l": 2.15,
          "v": 1,
          "w": 0.65,
          "x": -1.3,
          "y": 0,
          "z": -2.45,
          "id": "a5d7171d-cb85-4803-a180-d42e1215d335",
          "ry": 270,
          "bake": true,
          "lock": false,
          "type": "closet",
          "children": [],
          "baseboard": 0.1,
          "doorWidth": 0.02,
          "materials": {
            "closet": "cabinet_paint_white"
          },
          "bakeStatus": "done",
          "handleWidth": 0.02,
          "handleHeight": 0.3,
          "handleLength": 0.02
        },
        {
          "h": 2.4,
          "l": 2.15,
          "v": 1,
          "w": 0.65,
          "x": -1.3,
          "y": 0,
          "z": -7,
          "id": "801898f4-ac1b-4dc8-a33f-b1dedada3385",
          "ry": 270,
          "bake": true,
          "lock": false,
          "type": "closet",
          "children": [],
          "baseboard": 0.1,
          "doorWidth": 0.02,
          "materials": {
            "closet": "cabinet_paint_white"
          },
          "bakeStatus": "done",
          "handleWidth": 0.02,
          "handleHeight": 0.3,
          "handleLength": 0.02
        },
        {
          "h": 2.4,
          "l": 2.2,
          "v": 1,
          "w": 0.65,
          "x": -1.4,
          "y": 0,
          "z": -11.45,
          "id": "6762999b-c89d-4827-b3b2-2e24163f9051",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "closet",
          "children": [],
          "baseboard": 0.1,
          "doorWidth": 0.02,
          "materials": {
            "closet": "cabinet_paint_white"
          },
          "bakeStatus": "done",
          "handleWidth": 0.02,
          "handleHeight": 0.3,
          "handleLength": 0.02
        },
        {
          "h": 2.4,
          "l": 2.1,
          "v": 1,
          "w": 0.65,
          "x": 0.7,
          "y": 0,
          "z": -9.05,
          "id": "033e6ba0-afa7-4c12-8626-74c93ecfe667",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "closet",
          "children": [],
          "baseboard": 0.1,
          "doorWidth": 0.02,
          "materials": {
            "closet": "cabinet_paint_white"
          },
          "bakeStatus": "done",
          "handleWidth": 0.02,
          "handleHeight": 0.3,
          "handleLength": 0.02
        },
        {
          "h": 2.4,
          "l": 1.25,
          "v": 1,
          "w": 0.85,
          "x": 3.05,
          "y": 0,
          "z": 4.9,
          "id": "7ebbe031-5122-41a6-912b-696546e67c65",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "closet",
          "children": [],
          "baseboard": 0.1,
          "doorWidth": 0.02,
          "materials": {
            "closet": "cabinet_paint_white"
          },
          "bakeStatus": "done",
          "handleWidth": 0.02,
          "handleHeight": 0.3,
          "handleLength": 0.02
        },
        {
          "h": 2.2,
          "l": 1.3,
          "w": 0.02,
          "x": 2.05,
          "y": 0,
          "z": -9.45,
          "id": "8acb9ddf-08a6-469c-89d2-b33cccacd750",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "box",
          "visible": {
            "bird": true,
            "person": true,
            "floorplan": true
          },
          "children": [],
          "materials": {
            "top": "glass-wall",
            "side": "glass-wall"
          },
          "bakeStatus": "done",
          "hideInBakedModel": false
        },
        {
          "x": -2.83,
          "y": 0,
          "z": 1.55,
          "id": "b6b4e601-4d0a-4897-b747-8fb82a2a7bf3",
          "ry": 180,
          "src": "!e69ef9b3-cef1-4716-9d2a-b33ab51b315a",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -2.81,
          "y": 0,
          "z": 1.2899999999999994,
          "id": "78dd929e-12ab-4736-b443-eb4d0f94f9e9",
          "ry": 180,
          "src": "!45ea2592-1d34-4a4d-a068-70d43ca45d8d",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "h": 0.4,
          "l": 0.81,
          "w": 0.52,
          "x": -3.26,
          "y": 0.4,
          "z": 1.07,
          "id": "5143a8bc-b739-4d23-b877-19806c72d8bc",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "box",
          "visible": {
            "bird": true,
            "person": true,
            "floorplan": true
          },
          "children": [],
          "materials": {
            "top": {
              "size": [
                0.3,
                0.3
              ],
              "colorDiffuse": [
                0.859,
                0.859,
                0.859
              ],
              "specularCoef": 20,
              "colorSpecular": [
                0.859,
                0.859,
                0.859
              ]
            },
            "side": {
              "size": [
                0.3,
                0.3
              ],
              "colorDiffuse": [
                0.902,
                0.902,
                0.902
              ],
              "specularCoef": 20,
              "colorSpecular": [
                0.859,
                0.859,
                0.859
              ]
            }
          },
          "bakeStatus": "done",
          "hideInBakedModel": false
        },
        {
          "x": 1.45,
          "y": 0,
          "z": -8.99,
          "id": "08eff9e1-7d8d-4190-b6c7-d1a495c19f04",
          "ry": 180,
          "src": "!e69ef9b3-cef1-4716-9d2a-b33ab51b315a",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": 1.45,
          "y": 0,
          "z": -9.28,
          "id": "924cf805-51da-43ae-9530-90fdf3d3a8c7",
          "ry": 180,
          "src": "!45ea2592-1d34-4a4d-a068-70d43ca45d8d",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": 1.6,
          "y": 0,
          "z": -11.18,
          "id": "7e2cb5ae-a289-4ba9-a40d-488554ab00c8",
          "ry": 0,
          "src": "!859cee91-c04b-4f2c-99ac-960825459be2",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": 2.6,
          "y": 0,
          "z": -9.91,
          "id": "5a42c838-9924-4248-89b2-8ad2df9f7616",
          "ry": 180,
          "src": "!20a7e6c3-5944-485c-849f-afbea11f43df",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 1.1,
          "w": 1,
          "x": -4.15,
          "y": 0,
          "z": 6.2,
          "id": "e851a8b2-89d9-4e76-b812-21de84082c81",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "wall",
          "children": [],
          "materials": {
            "top": "wall_top",
            "back": "plaster_smooth",
            "base": {
              "colorDiffuse": [
                0.95,
                0.95,
                0.95
              ]
            },
            "front": "plaster_smooth"
          },
          "bakeStatus": "done",
          "baseHeight": 0,
          "backHasBase": true,
          "frontHasBase": true
        },
        {
          "h": 2.4,
          "l": 2.4,
          "v": 2,
          "w": 0.8,
          "x": -5.15,
          "y": 0,
          "z": 2.35,
          "id": "55686e58-ab96-4c11-84fd-b9b2d37660c7",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "kitchen",
          "fridge": false,
          "ovenPos": 3,
          "sinkPos": 1,
          "children": [],
          "ovenType": "single",
          "sinkType": "single",
          "baseBoard": 0.1,
          "doorWidth": 0.02,
          "fridgePos": 1,
          "materials": {
            "tab": "chrome",
            "oven": "oven_miele_60-60",
            "chrome": "chrome",
            "cooktop": "cooktop_westinghouse_60",
            "counter": "counter_stone_white",
            "kitchen": "cabinet_paint_white",
            "microwave": "microwave_samsung",
            "black_metal": {
              "colorDiffuse": [
                0.02,
                0.02,
                0.02
              ],
              "specularCoef": 24,
              "colorSpecular": [
                0.7,
                0.7,
                0.7
              ]
            }
          },
          "microwave": false,
          "bakeStatus": "done",
          "barCounter": false,
          "cooktopPos": 3,
          "cabinetType": "flat",
          "cooktopType": "electro60",
          "wallCabinet": false,
          "microwavePos": 1,
          "counterHeight": 0.9,
          "elementLength": 0.6,
          "extractorType": "none",
          "highCabinetLeft": 0,
          "counterThickness": 0.03,
          "highCabinetRight": 0,
          "wallCabinetWidth": 0.45,
          "wallCabinetHeight": 1.6
        },
        {
          "h": 2.4,
          "l": 1.6,
          "v": 2,
          "w": 0.8,
          "x": -2.75,
          "y": 0,
          "z": 2.35,
          "id": "93c32c1e-5703-4c93-8add-bd5396a56007",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "kitchen",
          "fridge": false,
          "ovenPos": 6,
          "sinkPos": 4,
          "children": [],
          "ovenType": "none",
          "sinkType": "none",
          "baseBoard": 0.1,
          "doorWidth": 0.02,
          "fridgePos": 1,
          "materials": {
            "tab": "chrome",
            "oven": "oven_miele_60-60",
            "chrome": "chrome",
            "cooktop": "cooktop_westinghouse_60",
            "counter": "counter_granite_black",
            "kitchen": "cabinet_paint_white",
            "microwave": "microwave_samsung",
            "black_metal": {
              "colorDiffuse": [
                0.02,
                0.02,
                0.02
              ],
              "specularCoef": 24,
              "colorSpecular": [
                0.7,
                0.7,
                0.7
              ]
            }
          },
          "microwave": false,
          "bakeStatus": "done",
          "barCounter": false,
          "cooktopPos": 6,
          "cabinetType": "flat",
          "cooktopType": "none",
          "wallCabinet": true,
          "microwavePos": 1,
          "counterHeight": 0.9,
          "elementLength": 0.6,
          "extractorType": "integrated",
          "highCabinetLeft": 3,
          "counterThickness": 0.03,
          "highCabinetRight": 0,
          "wallCabinetWidth": 0.45,
          "wallCabinetHeight": 1.6
        },
        {
          "h": 2.4,
          "l": 1.5,
          "v": 2,
          "w": 1.15,
          "x": -2.3,
          "y": 0,
          "z": 2.35,
          "id": "ddefdafc-49be-44f6-aafb-d4207eaa673a",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "kitchen",
          "fridge": false,
          "ovenPos": 6,
          "sinkPos": 4,
          "children": [],
          "ovenType": "none",
          "sinkType": "none",
          "baseBoard": 0.1,
          "doorWidth": 0.02,
          "fridgePos": 1,
          "materials": {
            "tab": "chrome",
            "oven": "oven_miele_60-60",
            "chrome": "chrome",
            "cooktop": "cooktop_westinghouse_60",
            "counter": "counter_granite_black",
            "kitchen": "cabinet_paint_white",
            "microwave": "microwave_samsung",
            "black_metal": {
              "colorDiffuse": [
                0.02,
                0.02,
                0.02
              ],
              "specularCoef": 24,
              "colorSpecular": [
                0.7,
                0.7,
                0.7
              ]
            }
          },
          "microwave": false,
          "bakeStatus": "done",
          "barCounter": false,
          "cooktopPos": 6,
          "cabinetType": "flat",
          "cooktopType": "none",
          "wallCabinet": true,
          "microwavePos": 1,
          "counterHeight": 0.9,
          "elementLength": 0.6,
          "extractorType": "integrated",
          "highCabinetLeft": 3,
          "counterThickness": 0.03,
          "highCabinetRight": 0,
          "wallCabinetWidth": 0.45,
          "wallCabinetHeight": 1.6
        },
        {
          "h": 2.4,
          "l": 0.37,
          "v": 1,
          "w": 0.2,
          "x": 1.8,
          "y": 0,
          "z": 7.2,
          "id": "d4fe7b31-2137-41e4-a878-af0e737a5b3a",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 30,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 0.37,
          "v": 1,
          "w": 0.2,
          "x": -2.7,
          "y": 0,
          "z": 7.2,
          "id": "8801fffb-01da-4be9-8742-58613607cfd0",
          "ry": 180,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 25,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 0.57,
          "v": 1,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": 7.2,
          "id": "ab04d3ce-83a3-4005-be8e-1ec2339003dc",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 30,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 0.35,
          "v": 1,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": 1.05,
          "id": "b47ff07e-bcc6-4e7c-b9ca-1aecf8450592",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 25,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 0.35,
          "v": 1,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": -3.25,
          "id": "8b50b7de-e601-42cd-a362-6174f56356c2",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 25,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 0.35,
          "v": 1,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": -3.75,
          "id": "fddaf677-8132-4ab7-8020-41eef648e2d2",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 25,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 2.4,
          "l": 0.35,
          "v": 1,
          "w": 0.2,
          "x": -5.15,
          "y": 0,
          "z": -11.1,
          "id": "e9bb7404-1323-4d6c-813d-0875f2277b56",
          "ry": 90,
          "bake": true,
          "lock": false,
          "type": "curtain",
          "folds": 25,
          "children": [],
          "materials": {
            "curtain": {
              "colorDiffuse": [
                1,
                1,
                1
              ]
            }
          },
          "bakeStatus": "done"
        },
        {
          "h": 0.4,
          "l": 0.81,
          "w": 0.43,
          "x": 1.04,
          "y": 0.4,
          "z": -9.5,
          "id": "660146f5-ed83-4840-b847-c7439f05e56c",
          "ry": 0,
          "bake": true,
          "lock": false,
          "type": "box",
          "visible": {
            "bird": true,
            "person": true,
            "floorplan": true
          },
          "children": [],
          "materials": {
            "top": {
              "size": [
                0.3,
                0.3
              ],
              "colorDiffuse": [
                0.859,
                0.859,
                0.859
              ],
              "specularCoef": 20,
              "colorSpecular": [
                0.859,
                0.859,
                0.859
              ]
            },
            "side": {
              "size": [
                0.3,
                0.3
              ],
              "colorDiffuse": [
                0.902,
                0.902,
                0.902
              ],
              "specularCoef": 20,
              "colorSpecular": [
                0.859,
                0.859,
                0.859
              ]
            }
          },
          "bakeStatus": "done",
          "hideInBakedModel": false
        },
        {
          "x": -3.55,
          "y": 0,
          "z": -4.57,
          "id": "c0ec1b21-f341-4bd6-bbfe-832318cc0ca9",
          "ry": 12,
          "src": "!fb4a3cef-3329-45f6-ab29-e0a72ad706ae",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.56,
          "y": 0,
          "z": -4.2,
          "id": "6338ccc4-a1ef-413c-9f7d-1d30e3cd0bb0",
          "ry": 270,
          "src": "!4385d6a9-d5ec-44fa-93d0-1b79d00b2b2a",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [
            {
              "x": 0.29268580912966513,
              "y": 0.7590001032833678,
              "z": -0.863871442772882,
              "id": "c6eb63bc-bd84-4ae4-964c-602bb73fc607",
              "ry": 52,
              "src": "!46560bce-ec75-4006-8db3-8ef836c5ab7e",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            },
            {
              "x": 0.03,
              "y": 0.758999930912954,
              "z": 0.72,
              "id": "bcced32c-ab7a-4ce5-b871-905ac67ac2f0",
              "ry": 180,
              "src": "!39141f95-9d1a-4ca9-973e-63b4c60013d4",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            }
          ],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.429999985610995,
          "y": 0,
          "z": -0.2999998189170965,
          "id": "2b06cf31-8dc8-42d8-b8d6-a3d273f4a43c",
          "ry": 180,
          "src": "!adc5a904-e3ef-4353-9cd4-a27a735fef43",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {
            "Image": "Nordic - Combination 1 X - Mareike Bأ¶hmer"
          },
          "bakeStatus": "done"
        },
        {
          "x": -3.46,
          "y": -1.7763568394002505e-15,
          "z": -2.12,
          "id": "7d6262e8-18ff-43d1-800e-0ea91e88754d",
          "ry": 90,
          "src": "!d23062b7-6ec4-45c0-9cee-c96d835b5f54",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.4799999868581697,
          "y": 0,
          "z": -2.0699998630670358,
          "id": "190251fe-3171-4516-98f7-159283d8f50d",
          "ry": 180,
          "src": "!29f0b877-f048-437f-a319-120341c96e2d",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -2.1899999546810953,
          "y": 0,
          "z": -0.5899998261507013,
          "id": "be9fd0ad-8340-4f1c-80af-aa66391fb1ed",
          "ry": 180,
          "src": "!db2aa032-24d8-403e-8477-0df205983be8",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [
            {
              "x": 0,
              "y": 0.5500000417455,
              "z": 0.01,
              "id": "c4fdbd73-4811-44f1-8399-a05900bba7d1",
              "ry": 0,
              "src": "!405d32bc-b2f1-4864-b83b-2774c0c0879c",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            }
          ],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -4.700000017289199,
          "y": 0,
          "z": -0.6099998266495721,
          "id": "7d549f3c-d62c-44b2-9473-c7658882fe27",
          "ry": 180,
          "src": "!db2aa032-24d8-403e-8477-0df205983be8",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [
            {
              "x": 0,
              "y": 0.5500000414232744,
              "z": 0,
              "id": "930ec19a-1c81-4377-8556-666f1ee3fc0d",
              "ry": 0,
              "src": "!405d32bc-b2f1-4864-b83b-2774c0c0879c",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            }
          ],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.43999998586043,
          "y": 0,
          "z": -0.23999981742048782,
          "id": "da67af14-bd3a-4143-980e-c835dd7beb3e",
          "ry": 180,
          "src": "!b60d51b9-2a08-4382-8f9b-2acb2d9b3b09",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [
            {
              "x": -0.41,
              "y": 0.5163149816387627,
              "z": 1.92,
              "id": "108101e1-39fc-4aa8-a8d1-b71e4cc2edca",
              "ry": 347,
              "src": "!11ccbb12-8302-45dd-b658-8c3a11697709",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            }
          ],
          "materials": {
            "Base": "White"
          },
          "bakeStatus": "done"
        },
        {
          "x": -2.65,
          "y": 0,
          "z": -6.46,
          "id": "55ac3aa5-16de-4259-bd18-62dfdcd911e5",
          "ry": 270,
          "src": "!0acc26ae-6ed0-49b0-b842-7b2c613bf8dd",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {
            "Base": "White",
            "lowpolyBlankets": "Blankets"
          },
          "bakeStatus": "done"
        },
        {
          "x": -1.8599999380111718,
          "y": -8.881784197001252e-16,
          "z": -11.160000038146972,
          "id": "df00930a-136c-477b-9282-483176ecbcef",
          "ry": 180,
          "src": "!3fdc8ac8-1d63-4cfd-a828-ac36c66d3157",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -2.8199999380111715,
          "y": 0,
          "z": -11.460000038146973,
          "id": "00c4fa7b-1615-46c8-b6d7-ce8277bc9158",
          "ry": 0,
          "src": "!75e0fee0-a7a7-445d-857f-cd3984eb8bab",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.8799999380111716,
          "y": 0,
          "z": -11.24000003814697,
          "id": "353d493a-5b8c-4733-a2d8-b8e13ee0ac35",
          "ry": 90,
          "src": "!fa55eb69-ac75-4d7e-81b3-07f6ba55aca4",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [
            {
              "x": -0.13,
              "y": 0.43200001120567233,
              "z": 0.03,
              "id": "5797132a-6df4-4ef2-9d2d-3ab972c629dd",
              "ry": 0,
              "src": "!8e18009c-0441-4270-84c0-9d6d6396ac4b",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            }
          ],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -2.829999938011172,
          "y": -8.881784197001252e-16,
          "z": -10.500000038146972,
          "id": "d7a16ef9-9d41-43f5-810e-711bf8066d9b",
          "ry": 0,
          "src": "!2008509a-c55c-4982-abdb-9e07b6d755c2",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.75,
          "y": 0,
          "z": -9.42,
          "id": "83ecc9d4-5a99-4569-8d38-f6cdee8cb882",
          "ry": 90,
          "src": "!c981f7e8-fed7-4ddb-b71a-198e6db662ee",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -4.5,
          "y": 8.881784197001252e-16,
          "z": -8.45,
          "id": "f2b12f6f-2c3a-46bc-8aec-1ad490727975",
          "ry": 139,
          "src": "!a75c3525-7a0f-4d5c-8432-d0d6a9b8126a",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": 0.97,
          "y": 0,
          "z": 6.58,
          "id": "3ea333ad-89e7-43a6-b57c-78ccc8bee995",
          "ry": 270,
          "src": "!e0201dc0-0029-4216-8ca2-18f289469d44",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": 0.89,
          "y": 0,
          "z": 5.49,
          "id": "2a4f4e49-e3cc-493c-ac78-ae033c336a61",
          "ry": 119,
          "src": "!201e83ed-a8fa-422a-8a92-acb8f44b8927",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -0.5199999380111691,
          "y": 0,
          "z": 4.839999866485597,
          "id": "f25dc4bc-1b5b-4e6f-815e-0d7f007331aa",
          "ry": 0,
          "src": "!07fc0229-eb2f-4b12-8867-207f082fad7f",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -0.62,
          "y": 0,
          "z": 6.07,
          "id": "3259a933-63eb-46e3-a621-3eb797ac5c05",
          "ry": 270,
          "src": "!77e8320d-8028-4489-924e-ba1827c488b6",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [
            {
              "x": 0.08,
              "y": 0.015000064736003793,
              "z": 0.01,
              "id": "b41853fa-e6ee-418b-a461-88c452316062",
              "ry": 0,
              "src": "!00015a7c-b361-4efc-8380-d59934a52f0d",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [
                {
                  "x": -0.053344570242809475,
                  "y": 0.40009939670562744,
                  "z": -0.11905455452579172,
                  "id": "10c16d10-48c2-4184-81a1-3de6f1f9d211",
                  "ry": 43,
                  "src": "!ee130981-8a20-4ce7-a39a-1783ad08d021",
                  "bake": false,
                  "lock": false,
                  "type": "interior",
                  "children": [],
                  "materials": {},
                  "bakeStatus": "done"
                }
              ],
              "materials": {},
              "bakeStatus": "done"
            }
          ],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -2.0999999380111682,
          "y": 0,
          "z": 6.1499998664855955,
          "id": "0bb572ec-62e8-4e05-9632-20c1f245dd38",
          "ry": 40,
          "src": "!6535df6d-25d6-487e-9388-ff8c06ebf4bb",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": 3.3898338852371457,
          "y": 0,
          "z": 6.261087516717122,
          "id": "b59ac845-47ea-4c10-bc18-638a81ba138c",
          "ry": 32,
          "src": "!345f3fb8-f834-491b-8ea8-a90bbbbeb3ef",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {
            "Plastic Chair": "Chocolate"
          },
          "bakeStatus": "done"
        },
        {
          "x": 4.72,
          "y": 0,
          "z": 6.71,
          "id": "6394bdd6-0e41-40d9-8907-8c55c264c84e",
          "ry": 324,
          "src": "!345f3fb8-f834-491b-8ea8-a90bbbbeb3ef",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {
            "Plastic Chair": "Chocolate"
          },
          "bakeStatus": "done"
        },
        {
          "x": -4.25,
          "y": 0,
          "z": 4.4,
          "id": "817ebde3-35f7-4fd5-9ebc-c0e17a82e882",
          "ry": 270,
          "lock": false,
          "type": "group",
          "children": [
            {
              "x": 9.536741951698957e-9,
              "y": 0,
              "z": 5.7220459037665705e-8,
              "id": "0d676259-3900-4e84-8af7-a270e12281d2",
              "ry": 125,
              "src": "!f2c328fa-24aa-4848-b7b8-e2f4648f5a82",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            },
            {
              "x": -0.009999990463258057,
              "y": 0,
              "z": -0.6399999427795406,
              "id": "7cb79cfe-bbbf-4abc-b4ef-91ea588af505",
              "ry": 56,
              "src": "!f2c328fa-24aa-4848-b7b8-e2f4648f5a82",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            },
            {
              "x": 0.4900000137090676,
              "y": 0,
              "z": -0.30999983787536634,
              "id": "1183fe5d-1e18-4ca4-a631-ea75b0fc9538",
              "ry": 0,
              "src": "!d0894b11-024b-4386-82bf-0fc18ca36d75",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [
                {
                  "x": 0.5,
                  "y": 0,
                  "z": 0.29,
                  "id": "44a5a8b4-1379-40f9-97e3-b9b0812b3eea",
                  "ry": 236,
                  "src": "!f2c328fa-24aa-4848-b7b8-e2f4648f5a82",
                  "bake": false,
                  "lock": false,
                  "type": "interior",
                  "children": [],
                  "materials": {},
                  "bakeStatus": "done"
                },
                {
                  "x": 0.5,
                  "y": 0,
                  "z": -0.32,
                  "id": "bd19c1ad-2cea-48e1-bf1a-2e81a1f0c15c",
                  "ry": 301,
                  "src": "!f2c328fa-24aa-4848-b7b8-e2f4648f5a82",
                  "bake": false,
                  "lock": false,
                  "type": "interior",
                  "children": [],
                  "materials": {},
                  "bakeStatus": "done"
                }
              ],
              "materials": {},
              "bakeStatus": "done"
            },
            {
              "x": 0.4600000137090676,
              "y": 0,
              "z": -0.2799998378753661,
              "id": "36115b55-e738-45d2-a17d-1e8065d6ad3a",
              "ry": 90,
              "src": "!53bc13ed-595f-4f58-9686-eed0ad4b3f70",
              "bake": false,
              "lock": false,
              "type": "interior",
              "children": [],
              "materials": {},
              "bakeStatus": "done"
            }
          ]
        },
        {
          "x": 1.79,
          "y": 0,
          "z": 3.21,
          "id": "70b47a68-c335-4bcf-a68e-4532bcd4e202",
          "ry": 90,
          "src": "!8c4f02f4-d9ef-45d4-9b60-02596aeee123",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        },
        {
          "x": -3.17,
          "y": 0,
          "z": 0.5,
          "id": "a8dcfde7-16f5-4fd0-a2c4-bfc4a040fed4",
          "ry": 90,
          "src": "!dfbf1720-51f5-4de2-8661-fdb657d17e63",
          "bake": false,
          "lock": false,
          "type": "interior",
          "children": [],
          "materials": {},
          "bakeStatus": "done"
        }
      ],
      "bakeStatus": "none",
      "bakeSettings": {},
      "bakedModelUrl": "/535e624259ee6b0200000484/bake/2017-06-30_11-05-49_P144IW/regular/lighting.gz.data3d.buffer",
      "lightMapCenter": 0.7,
      "bakeContentHash": "64917b7f258655f4133316561d8c127b36f32dd7d0a365e4dee18a2b03eb1fbe_d7d60961b4193eb9366c3e7ab2eca715",
      "bakedModelStage": "regular",
      "lightMapFalloff": 0.5,
      "pendingBakeJobs": [],
      "lightMapIntensity": 1.2,
      "calculatedFloorArea": 91.31072093505806,
      "bakeRegularStatusFileKey": "archilogic-content-beta/535e624259ee6b0200000484/bake/2017-06-30_11-05-49_P144IW/regular/baking-task-status.json"
    },
    {
      "x": 2.812942483112173,
      "y": 0.5,
      "z": 5.031857661312674,
      "id": "058004fd-ba3c-4652-b12f-0ad94a73dca6",
      "rx": -80,
      "ry": 148.4854539166215,
      "fov": 50,
      "mode": "bird",
      "name": "lastSavePosition",
      "type": "camera-bookmark",
      "children": [],
      "distance": 8.430607632891752,
      "displayInUI": false,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -1.6757359566993841,
      "y": 0.5,
      "z": -1.9263853036139302,
      "id": "add7b140-7563-463a-b324-75e2b460e915",
      "rx": -89.9,
      "ry": 180,
      "fov": 50,
      "mode": "floorplan",
      "name": "Top View",
      "type": "camera-bookmark",
      "index": 0,
      "children": [],
      "distance": 27.172638840745442,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -1.773724594765369,
      "y": 1.037108274040117,
      "z": 7.189745591791159,
      "id": "486a6760-e8d1-456d-a2d0-5358d65b2ef1",
      "rx": 0,
      "ry": 142.98472385428914,
      "fov": 50,
      "mode": "person",
      "name": "Living",
      "type": "camera-bookmark",
      "index": 1,
      "children": [],
      "distance": 0.01,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -0.10867185949630753,
      "y": 1.37,
      "z": 5.641729959198008,
      "id": "4a0f17c1-fcde-4706-9188-48ddeb808927",
      "rx": 0,
      "ry": 221.46180963572306,
      "fov": 50,
      "mode": "person",
      "name": "Kitchen",
      "type": "camera-bookmark",
      "index": 2,
      "children": [],
      "distance": 0.01,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -3.4477636342226523,
      "y": 0.5,
      "z": 4.995480103362032,
      "id": "5d76c74b-a2b5-4ddf-a6e9-a6fe009377b7",
      "rx": -38.48648648648648,
      "ry": 269.873168157716,
      "fov": 50,
      "mode": "bird",
      "name": "Dining",
      "type": "camera-bookmark",
      "index": 3,
      "children": [],
      "distance": 8.906244226144622,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -3.7658608366276267,
      "y": 0.5,
      "z": -1.2596035894536606,
      "id": "4d6fec29-1467-40be-8f91-5435f0317072",
      "rx": -59.152761457109314,
      "ry": 324.7591069330199,
      "fov": 50,
      "mode": "floorplan",
      "name": "Bedroom",
      "type": "camera-bookmark",
      "index": 4,
      "children": [],
      "distance": 5.516141460957603,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -2.981339488172762,
      "y": 0.5,
      "z": -5.77364527852327,
      "id": "3851ec4b-53c0-47d4-afc2-3d646043eb5d",
      "rx": -56.77438307873098,
      "ry": 130.89601734008315,
      "fov": 50,
      "mode": "floorplan",
      "name": "Bedroom",
      "type": "camera-bookmark",
      "index": 5,
      "children": [],
      "distance": 6.1758992613226775,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -1.1860076748732638,
      "y": 0.5,
      "z": -10.179246741480341,
      "id": "97eabbe1-578a-48ee-a40f-60af0187f2b1",
      "rx": -59.08108108108104,
      "ry": 224.6322427235562,
      "fov": 50,
      "mode": "bird",
      "name": "Master Bedroom",
      "type": "camera-bookmark",
      "index": 6,
      "children": [],
      "distance": 8,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    },
    {
      "x": -1.6757359566993841,
      "y": 0.5,
      "z": -1.9263853036139302,
      "id": "fe33bb66-b1fe-4d13-9904-2e98fc05a525",
      "rx": -89.9,
      "ry": 180,
      "fov": 50,
      "mode": "floorplan",
      "name": "Top View",
      "type": "camera-bookmark",
      "index": 7,
      "children": [],
      "distance": 27.172638840745442,
      "displayInUI": true,
      "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
      "hiddenLevelIds": [],
      "visibleLevelIds": [
        "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd"
      ]
    }
  ],
  "editable": true,
  "rootPlan": "",
  "username": "archilogic",
  "createdAt": "2014-08-19T10:52:50.246Z",
  "deletable": true,
  "updatedAt": "2015-07-31T16:40:23.493Z",
  "project_id": 472,
  "staff_pick": true,
  "bakeSettings": {
    "lat": 47.4,
    "date": 16,
    "hour": 9,
    "long": 8.5,
    "year": 2017,
    "month": 8,
    "minute": 20
  },
  "activeLevelId": "3e7b7c02-9332-4cf7-bb03-fcc38defa8fd",
  "floorArea": 110.1,
  "id": "62cb3510-6708-4f62-94c3-f9936db7e20b",
  "v": 1,
  "modelDisplayName": "normal sample furnished",
  "modelResourceName": "h4959x0g"
};


 /*
   const sceneId = '5dc58829-ecd3-4b33-bdaf-f798b7edecd4'
const sceneEl = document.querySelector('a-scene')
io3d.scene.getAframeElements(sceneId)
  .then(element => {
    sceneEl.appendChild(element)
  })
            */

 /*const sceneEl = document.querySelector('a-scene')
io3d.scene.getAframeElements(sceneId)
  .then(elements => {
    // this will give us two elements
    // The first is the actual scene according to the scene structure hierarchy
    // The second is the camera with potential waypoints that where defined in the scene structure
    // you can leverage the waypoints using our A-Frame tour component
    elements.forEach((el) => {
      // add elements to the scene
      sceneEl.appendChild(el)
    })
  })*/

/*io3d.scene.normalizeSceneStructure(element3d)
  .then(result => {
    console.log(result)
  })*/


const element3d1 = {
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
};

/* const sceneEl = document.querySelector('a-scene');
const elements = io3d.scene.getAframeElementsFromSceneStructure(element3d1);
  
    // this will give us two elements
    // The first is the actual scene according to the scene structure hierarchy
    // The second is the camera with potential waypoints that where defined in the scene structure
    // you can leverage the waypoints using our A-Frame tour component
   // elements.forEach((el) => {
      // add elements to the scene
      sceneEl.appendChild(elements);
    */
  

/*
const sceneEl = document.querySelector('a-scene')

const element = io3d.scene.getAframeElementsFromSceneStructure(element3d)
sceneEl.appendChild(element)

*/
/*ReactDOM.render(
  <App/>,
  document.querySelector('#sceneContainer')
);
*/
ReactDOM.render(
  <App/>,
  document.querySelector('#sceneContainer')
);

 const sceneEl = document.querySelector('a-scene');
const elements= io3d.scene.getAframeElementsFromSceneStructure(element3d1);
  console.log(io3d.runtime.libInfo);
    
      sceneEl.appendChild(elements);

/*ReactDOM.render(
  sceneEl,
  document.querySelector('#root')
);*/