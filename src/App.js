import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';


import './face-notifications';

class App extends Component {
  render() {
    return (

    <div id="root">
    
<html>
  <head>
    <title>Default setup</title>
    <meta name="description" content="3d.io residential interior scene with dynamic lighting and realtime shadows"/>
    
    <script src="https://aframe.io/releases/0.7.1/aframe.min.js"></script>
  
    <script src="https://3d.io/releases/3dio-js/1.1.x/3dio.min.js"></script>
    <link href="https://storage-nocdn.3d.io/app-creator-templates/default.css" rel="stylesheet"/>
    <script src="https://unpkg.com/aframe-animation-component@3.2.5/dist/aframe-animation-component.min.js"></script>
  </head>
  <body>
  
    <io3d-app id="default_setup" scene-id="62cb3510-6708-4f62-94c3-f9936db7e20b"></io3d-app>
    
    <div id="custom-logo">
      <a href="https://3d.io" target="_blank">
        <img src="https://archilogic-com.github.io/ui-style-guide/3d-io-logo/3d-io-logo-small.svg"/>
      </a>
    </div>
    <div class="camera-controls">
      <div class="waypoints">
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="add7b140-7563-463a-b324-75e2b460e915">Top View</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="486a6760-e8d1-456d-a2d0-5358d65b2ef1">Living</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="4a0f17c1-fcde-4706-9188-48ddeb808927">Kitchen</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="5d76c74b-a2b5-4ddf-a6e9-a6fe009377b7">Dining</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="4d6fec29-1467-40be-8f91-5435f0317072">Bedroom</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="3851ec4b-53c0-47d4-afc2-3d646043eb5d">Bedroom</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="97eabbe1-578a-48ee-a40f-60af0187f2b1">Master Bedroom</button>
        <button class="btn-waypoint" onclick="document.querySelector('[camera]').components['tour'].goTo(this.dataset.waypointId)" data-waypoint-id="fe33bb66-b1fe-4d13-9904-2e98fc05a525">Top View</button>
        <button class="btn-toggle-play"
                onclick="this.classList.contains('playing') ? document.querySelector('[camera]').components['tour'].pauseTour() : document.querySelector('[camera]').components['tour'].playTour(), this.classList.toggle('playing')">
        </button>
      </div>
      <div class="camera-mode">
        <div class="btn camera active"
             onclick="document.querySelector('.waypoints').classList.toggle('hide'), this.classList.toggle('active')">
        </div>
        <div class="btn bird"
             id="btn-bird"
             onclick="document.querySelector('[camera]').components['tour'].updateViewPoint({position:{y:7}, rotation:{x:-60}}), document.querySelector('#btn-person').classList.remove('active'), this.classList.add('active')">
        </div>
        <div class="btn person active"
             id="btn-person"
             onclick="document.querySelector('[camera]').components['tour'].updateViewPoint({position:{y:1.6}, rotation:{x:0}}), document.querySelector('#btn-bird').classList.remove('active'), this.classList.add('active')">
        </div>
      </div>
    </div>
  
    <a-scene io3d-lighting="intensity:0.9">
      <a-entity camera="" tour="autoStart: false" wasd-controls="" look-controls="" position="-2.073 1.6 -1.474" rotation="-2.063 203.308 0">
        <a-entity tour-waypoint="Top View" io3d-uuid="add7b140-7563-463a-b324-75e2b460e915" position="-7.959815433483447 22.172638840745442 1.675735956699384" rotation="-89.9 450 0"></a-entity>
        <a-entity tour-waypoint="Living" io3d-uuid="486a6760-e8d1-456d-a2d0-5358d65b2ef1" position="1.1168750348397785 1.037108274040117 1.7797448740972899" rotation="0 412.98472385428914 0"></a-entity>
        <a-entity tour-waypoint="Kitchen" io3d-uuid="4a0f17c1-fcde-4706-9188-48ddeb808927" position="-0.4316313757947364 1.37 0.10205065263211961" rotation="0 491.46180963572306 0"></a-entity>
        <a-entity tour-waypoint="Dining" io3d-uuid="5d76c74b-a2b5-4ddf-a6e9-a6fe009377b7" position="-1.0699430785395438 8 -3.5236261145326577" rotation="-38.48648648648648 539.873168157716 0"></a-entity>
        <a-entity tour-waypoint="Bedroom" io3d-uuid="4d6fec29-1467-40be-8f91-5435f0317072" position="-9.650512503727434 8 2.1338268605968826" rotation="-59.152761457109314 594.7591069330199 0"></a-entity>
        <a-entity tour-waypoint="Bedroom" io3d-uuid="3851ec4b-53c0-47d4-afc2-3d646043eb5d" position="-9.639031885443684 8 5.539305773258945" rotation="-56.77438307873098 400.8960173400832 0"></a-entity>
        <a-entity tour-waypoint="Master Bedroom" io3d-uuid="97eabbe1-578a-48ee-a40f-60af0187f2b1" position="-13.334875006116892 8 -1.701906768812833" rotation="-59.08108108108104 494.6322427235562 0"></a-entity>
        <a-entity tour-waypoint="Top View" io3d-uuid="fe33bb66-b1fe-4d13-9904-2e98fc05a525" position="-7.959815433483447 22.172638840745442 1.675735956699384" rotation="-89.9 450 0"></a-entity>
      </a-entity>
      <a-sky src="https://storage.3d.io/535e624259ee6b0200000484/2017-08-08_15-19-35_C6qRcB/empire_low.jpg" rotation="0 290 0"></a-sky>
      <a-entity position="-6.080855307214579 0 0" rotation="0 90 0" io3d-uuid="62cb3510-6708-4f62-94c3-f9936db7e20b" class="io3d-scene">
        <a-entity position="0 0 0" rotation="0 0 0" io3d-uuid="3e7b7c02-9332-4cf7-bb03-fcc38defa8fd">
          <a-entity io3d-data3d="key: /535e624259ee6b0200000484/bake/2017-06-30_11-05-49_P144IW/regular/lighting.gz.data3d.buffer; lightMapIntensity: 1.2; lightMapExposure: 0.7" shadow="cast: false; receive: true"></a-entity>
          <a-entity io3d-furniture="id: 859cee91-c04b-4f2c-99ac-960825459be2" shadow="cast: true; receive: false" position="-3.72 0 1.19" rotation="0 180 0" io3d-uuid="5c3ca2c9-fb31-4d2a-bd50-a85b97290ac0"></a-entity>
          <a-entity io3d-furniture="id: 20a7e6c3-5944-485c-849f-afbea11f43df" shadow="cast: true; receive: false" position="-4.78 0 0.59" rotation="0 180 0" io3d-uuid="9a6cbe62-b4fe-49ec-a411-6e5383b3767a"></a-entity>
          <a-entity io3d-furniture="id: e69ef9b3-cef1-4716-9d2a-b33ab51b315a" shadow="cast: true; receive: false" position="-2.83 0 1.55" rotation="0 180 0" io3d-uuid="b6b4e601-4d0a-4897-b747-8fb82a2a7bf3"></a-entity>
          <a-entity io3d-furniture="id: 45ea2592-1d34-4a4d-a068-70d43ca45d8d" shadow="cast: true; receive: false" position="-2.81 0 1.2899999999999994" rotation="0 180 0" io3d-uuid="78dd929e-12ab-4736-b443-eb4d0f94f9e9"></a-entity>
          <a-entity io3d-furniture="id: e69ef9b3-cef1-4716-9d2a-b33ab51b315a" shadow="cast: true; receive: false" position="1.45 0 -8.99" rotation="0 180 0" io3d-uuid="08eff9e1-7d8d-4190-b6c7-d1a495c19f04"></a-entity>
          <a-entity io3d-furniture="id: 45ea2592-1d34-4a4d-a068-70d43ca45d8d" shadow="cast: true; receive: false" position="1.45 0 -9.28" rotation="0 180 0" io3d-uuid="924cf805-51da-43ae-9530-90fdf3d3a8c7"></a-entity>
          <a-entity io3d-furniture="id: 859cee91-c04b-4f2c-99ac-960825459be2" shadow="cast: true; receive: false" position="1.6 0 -11.18" rotation="0 0 0" io3d-uuid="7e2cb5ae-a289-4ba9-a40d-488554ab00c8"></a-entity>
          <a-entity io3d-furniture="id: 20a7e6c3-5944-485c-849f-afbea11f43df" shadow="cast: true; receive: false" position="2.6 0 -9.91" rotation="0 180 0" io3d-uuid="5a42c838-9924-4248-89b2-8ad2df9f7616"></a-entity>
          <a-entity io3d-furniture="id: fb4a3cef-3329-45f6-ab29-e0a72ad706ae" shadow="cast: true; receive: false" position="-3.55 0 -4.57" rotation="0 12 0" io3d-uuid="c0ec1b21-f341-4bd6-bbfe-832318cc0ca9"></a-entity>
          <a-entity io3d-furniture="id: 4385d6a9-d5ec-44fa-93d0-1b79d00b2b2a" shadow="cast: true; receive: false" position="-3.56 0 -4.2" rotation="0 270 0" io3d-uuid="6338ccc4-a1ef-413c-9f7d-1d30e3cd0bb0">
            <a-entity io3d-furniture="id: 46560bce-ec75-4006-8db3-8ef836c5ab7e" shadow="cast: true; receive: false" position="0.29268580912966513 0.7590001032833678 -0.863871442772882" rotation="0 52 0" io3d-uuid="c6eb63bc-bd84-4ae4-964c-602bb73fc607"></a-entity>
            <a-entity io3d-furniture="id: 39141f95-9d1a-4ca9-973e-63b4c60013d4" shadow="cast: true; receive: false" position="0.03 0.758999930912954 0.72" rotation="0 180 0" io3d-uuid="bcced32c-ab7a-4ce5-b871-905ac67ac2f0"></a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: adc5a904-e3ef-4353-9cd4-a27a735fef43; material_Image:Nordic - Combination 1 X - Mareike Böhmer" shadow="cast: true; receive: false" position="-3.429999985610995 0 -0.2999998189170965" rotation="0 180 0" io3d-uuid="2b06cf31-8dc8-42d8-b8d6-a3d273f4a43c"></a-entity>
          <a-entity io3d-furniture="id: d23062b7-6ec4-45c0-9cee-c96d835b5f54" shadow="cast: true; receive: false" position="-3.46 -1.7763568394002505e-15 -2.12" rotation="0 90 0" io3d-uuid="7d6262e8-18ff-43d1-800e-0ea91e88754d"></a-entity>
          <a-entity io3d-furniture="id: 29f0b877-f048-437f-a319-120341c96e2d" shadow="cast: true; receive: false" position="-3.4799999868581697 0 -2.0699998630670358" rotation="0 180 0" io3d-uuid="190251fe-3171-4516-98f7-159283d8f50d"></a-entity>
          <a-entity io3d-furniture="id: db2aa032-24d8-403e-8477-0df205983be8" shadow="cast: true; receive: false" position="-2.1899999546810953 0 -0.5899998261507013" rotation="0 180 0" io3d-uuid="be9fd0ad-8340-4f1c-80af-aa66391fb1ed">
            <a-entity io3d-furniture="id: 405d32bc-b2f1-4864-b83b-2774c0c0879c" shadow="cast: true; receive: false" position="0 0.5500000417455 0.01" rotation="0 0 0" io3d-uuid="c4fdbd73-4811-44f1-8399-a05900bba7d1"></a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: db2aa032-24d8-403e-8477-0df205983be8" shadow="cast: true; receive: false" position="-4.700000017289199 0 -0.6099998266495721" rotation="0 180 0" io3d-uuid="7d549f3c-d62c-44b2-9473-c7658882fe27">
            <a-entity io3d-furniture="id: 405d32bc-b2f1-4864-b83b-2774c0c0879c" shadow="cast: true; receive: false" position="0 0.5500000414232744 0" rotation="0 0 0" io3d-uuid="930ec19a-1c81-4377-8556-666f1ee3fc0d"></a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: b60d51b9-2a08-4382-8f9b-2acb2d9b3b09; material_Base:White" shadow="cast: true; receive: false" position="-3.43999998586043 0 -0.23999981742048782" rotation="0 180 0" io3d-uuid="da67af14-bd3a-4143-980e-c835dd7beb3e">
            <a-entity io3d-furniture="id: 11ccbb12-8302-45dd-b658-8c3a11697709" shadow="cast: true; receive: false" position="-0.41 0.5163149816387627 1.92" rotation="0 347 0" io3d-uuid="108101e1-39fc-4aa8-a8d1-b71e4cc2edca"></a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: 0acc26ae-6ed0-49b0-b842-7b2c613bf8dd; material_Base:White; material_lowpolyBlankets:Blankets" shadow="cast: true; receive: false" position="-2.65 0 -6.46" rotation="0 270 0" io3d-uuid="55ac3aa5-16de-4259-bd18-62dfdcd911e5"></a-entity>
          <a-entity io3d-furniture="id: 3fdc8ac8-1d63-4cfd-a828-ac36c66d3157" shadow="cast: true; receive: false" position="-1.8599999380111718 -8.881784197001252e-16 -11.160000038146972" rotation="0 180 0" io3d-uuid="df00930a-136c-477b-9282-483176ecbcef"></a-entity>
          <a-entity io3d-furniture="id: 75e0fee0-a7a7-445d-857f-cd3984eb8bab" shadow="cast: true; receive: false" position="-2.8199999380111715 0 -11.460000038146973" rotation="0 0 0" io3d-uuid="00c4fa7b-1615-46c8-b6d7-ce8277bc9158"></a-entity>
          <a-entity io3d-furniture="id: fa55eb69-ac75-4d7e-81b3-07f6ba55aca4" shadow="cast: true; receive: false" position="-3.8799999380111716 0 -11.24000003814697" rotation="0 90 0" io3d-uuid="353d493a-5b8c-4733-a2d8-b8e13ee0ac35">
            <a-entity io3d-furniture="id: 8e18009c-0441-4270-84c0-9d6d6396ac4b" shadow="cast: true; receive: false" position="-0.13 0.43200001120567233 0.03" rotation="0 0 0" io3d-uuid="5797132a-6df4-4ef2-9d2d-3ab972c629dd"></a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: 2008509a-c55c-4982-abdb-9e07b6d755c2" shadow="cast: true; receive: false" position="-2.829999938011172 -8.881784197001252e-16 -10.500000038146972" rotation="0 0 0" io3d-uuid="d7a16ef9-9d41-43f5-810e-711bf8066d9b"></a-entity>
          <a-entity io3d-furniture="id: c981f7e8-fed7-4ddb-b71a-198e6db662ee" shadow="cast: true; receive: false" position="-3.75 0 -9.42" rotation="0 90 0" io3d-uuid="83ecc9d4-5a99-4569-8d38-f6cdee8cb882"></a-entity>
          <a-entity io3d-furniture="id: a75c3525-7a0f-4d5c-8432-d0d6a9b8126a" shadow="cast: true; receive: false" position="-4.5 8.881784197001252e-16 -8.45" rotation="0 139 0" io3d-uuid="f2b12f6f-2c3a-46bc-8aec-1ad490727975"></a-entity>
          <a-entity io3d-furniture="id: e0201dc0-0029-4216-8ca2-18f289469d44" shadow="cast: true; receive: false" position="0.97 0 6.58" rotation="0 270 0" io3d-uuid="3ea333ad-89e7-43a6-b57c-78ccc8bee995"></a-entity>
          <a-entity io3d-furniture="id: 201e83ed-a8fa-422a-8a92-acb8f44b8927" shadow="cast: true; receive: false" position="0.89 0 5.49" rotation="0 119 0" io3d-uuid="2a4f4e49-e3cc-493c-ac78-ae033c336a61"></a-entity>
          <a-entity io3d-furniture="id: 07fc0229-eb2f-4b12-8867-207f082fad7f" shadow="cast: true; receive: false" position="-0.5199999380111691 0 4.839999866485597" rotation="0 0 0" io3d-uuid="f25dc4bc-1b5b-4e6f-815e-0d7f007331aa"></a-entity>
          <a-entity io3d-furniture="id: 77e8320d-8028-4489-924e-ba1827c488b6" shadow="cast: true; receive: false" position="-0.62 0 6.07" rotation="0 270 0" io3d-uuid="3259a933-63eb-46e3-a621-3eb797ac5c05">
            <a-entity io3d-furniture="id: 00015a7c-b361-4efc-8380-d59934a52f0d" shadow="cast: true; receive: false" position="0.08 0.015000064736003793 0.01" rotation="0 0 0" io3d-uuid="b41853fa-e6ee-418b-a461-88c452316062">
              <a-entity io3d-furniture="id: ee130981-8a20-4ce7-a39a-1783ad08d021" shadow="cast: true; receive: false" position="-0.053344570242809475 0.40009939670562744 -0.11905455452579172" rotation="0 43 0" io3d-uuid="10c16d10-48c2-4184-81a1-3de6f1f9d211"></a-entity>
            </a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: 6535df6d-25d6-487e-9388-ff8c06ebf4bb" shadow="cast: true; receive: false" position="-2.0999999380111682 0 6.1499998664855955" rotation="0 40 0" io3d-uuid="0bb572ec-62e8-4e05-9632-20c1f245dd38"></a-entity>
          <a-entity io3d-furniture="id: 345f3fb8-f834-491b-8ea8-a90bbbbeb3ef; material_Plastic_Chair:Chocolate" shadow="cast: true; receive: false" position="3.3898338852371457 0 6.261087516717122" rotation="0 32 0" io3d-uuid="b59ac845-47ea-4c10-bc18-638a81ba138c"></a-entity>
          <a-entity io3d-furniture="id: 345f3fb8-f834-491b-8ea8-a90bbbbeb3ef; material_Plastic_Chair:Chocolate" shadow="cast: true; receive: false" position="4.72 0 6.71" rotation="0 324 0" io3d-uuid="6394bdd6-0e41-40d9-8907-8c55c264c84e"></a-entity>
          <a-entity position="-4.25 0 4.4" rotation="0 270 0" io3d-uuid="817ebde3-35f7-4fd5-9ebc-c0e17a82e882">
            <a-entity io3d-furniture="id: f2c328fa-24aa-4848-b7b8-e2f4648f5a82" shadow="cast: true; receive: false" position="9.536741951698957e-9 0 5.7220459037665705e-8" rotation="0 125 0" io3d-uuid="0d676259-3900-4e84-8af7-a270e12281d2"></a-entity>
            <a-entity io3d-furniture="id: f2c328fa-24aa-4848-b7b8-e2f4648f5a82" shadow="cast: true; receive: false" position="-0.009999990463258057 0 -0.6399999427795406" rotation="0 56 0" io3d-uuid="7cb79cfe-bbbf-4abc-b4ef-91ea588af505"></a-entity>
            <a-entity io3d-furniture="id: d0894b11-024b-4386-82bf-0fc18ca36d75" shadow="cast: true; receive: false" position="0.4900000137090676 0 -0.30999983787536634" rotation="0 0 0" io3d-uuid="1183fe5d-1e18-4ca4-a631-ea75b0fc9538">
              <a-entity io3d-furniture="id: f2c328fa-24aa-4848-b7b8-e2f4648f5a82" shadow="cast: true; receive: false" position="0.5 0 0.29" rotation="0 236 0" io3d-uuid="44a5a8b4-1379-40f9-97e3-b9b0812b3eea"></a-entity>
              <a-entity io3d-furniture="id: f2c328fa-24aa-4848-b7b8-e2f4648f5a82" shadow="cast: true; receive: false" position="0.5 0 -0.32" rotation="0 301 0" io3d-uuid="bd19c1ad-2cea-48e1-bf1a-2e81a1f0c15c"></a-entity>
            </a-entity>
            <a-entity io3d-furniture="id: 53bc13ed-595f-4f58-9686-eed0ad4b3f70" shadow="cast: true; receive: false" position="0.4600000137090676 0 -0.2799998378753661" rotation="0 90 0" io3d-uuid="36115b55-e738-45d2-a17d-1e8065d6ad3a"></a-entity>
          </a-entity>
          <a-entity io3d-furniture="id: 8c4f02f4-d9ef-45d4-9b60-02596aeee123" shadow="cast: true; receive: false" position="1.79 0 3.21" rotation="0 90 0" io3d-uuid="70b47a68-c335-4bcf-a68e-4532bcd4e202"></a-entity>
          <a-entity io3d-furniture="id: dfbf1720-51f5-4de2-8661-fdb657d17e63" shadow="cast: true; receive: false" position="-3.17 0 0.5" rotation="0 90 0" io3d-uuid="a8dcfde7-16f5-4fd0-a2c4-bfc4a040fed4"></a-entity>
        </a-entity>
      </a-entity>
    </a-scene>
  </body>
</html>

    </div>
  
    );
  }
}

export default App;
