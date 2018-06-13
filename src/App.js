import React, { Component } from 'react' ;
import { Entity, Scene } from 'aframe-react';
import '@ajwest/aframe';
import io3d from '3dio';
import '3dio';



import './face-notifications';


class App extends Component {
  render() {
    return (

   
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
   /* <
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
    <script src="https://dist.3d.io/3dio-js/1.x.x/3dio.min.js"></script>
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Treasure Hunt</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">
      <a-scene>
        <a-entity io3d-data3d="url:https://storage.3d.io/535e624259ee6b0200000484/170725-1421-wujxjb/archilogic_2017-07-25_14-19-02_hn9axa.gz.data3d.buffer"
                  position="6.031 0 0.145">
          <a-camera id="camera" position="-6.085 0 0" rotation="0 0 0" wasd-controls="enabled: false">
            <a-entity id="hud"></a-entity>
            <a-entity cursor="fuse: true; fuseTimeout: 2000"
                      raycaster="objects:.clickable; far: 3"
                      position="0 0 -1"
                      geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.05"
                      material="color: black; shader: flat">
              <a-animation begin="click" easing="ease-in" attribute="scale" dur="150"
                           fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
              <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale" dur="2000"
                           fill="backwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
            </a-entity>
          </a-camera>
          <a-entity walking-trail position="-6.085 0 0">
            <a-entity walking-trail-item position="-0.441 0 -1.125"></a-entity>
            <a-entity walking-trail-item position="-0.296 0 2.027"></a-entity>
            <a-entity walking-trail-item position="-3.594 0 -1.190"></a-entity>
            <a-entity walking-trail-item position="-3.594 0 -3.829"></a-entity>
            <a-entity walking-trail-item position="-3.594 0 -4.883"></a-entity>
            <a-entity walking-trail-item position="-2.001 0 -3.829"></a-entity>
            <a-entity walking-trail-item position="0.095 0 -4.883"></a-entity>
            <a-entity walking-trail-item position="3.020 0 -4.883"></a-entity>
          </a-entity>
        </a-entity>
        <a-entity clues-component=""></a-entity>
      </a-scene>
    </div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.
      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
    );
  }
}

export default App;
