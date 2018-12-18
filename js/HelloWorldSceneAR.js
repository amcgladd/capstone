'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroQuad
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };
  }

  render() {
    return (
      <ViroARScene >

        <ViroARImageMarker target={"book"}>

        <ViroAmbientLight color="#FFFFFF" />

        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
          position={[0, 3, 1]} color="#FFFFFF" castsShadow={true} />


          <Viro3DObject
            source={require('./res/burj.obj')}
             resources={[require('./res/burj.mtl'),
                        require('./res/burj/_2.jpg'),
                        require('./res/burj/_3.jpg'),
                        require('./res/burj/c.jpg'),
                        require('./res/burj/d.jpg'),
                        require('./res/burj/e.jpg'),
                        require('./res/burj/M_5.jpg'),
                        require('./res/burj/Sketchy_Lines_Wavy_Vertical.jpg'),
                        require('./res/burj/Sketchy_Siding_Straight.jpg')
          ]}
            position={[0, 0, 0]}
            scale={[1, 1, 1]}
            animation={{name: "rotate", run: true, loop: true}}
            type="OBJ" />

            <ViroQuad
              rotation={[-90, 0, 0]}
              position={[0, -0.001, 0]}
              width={2.5} height={2.5}
              arShadowReceiver={true} />

        </ViroARImageMarker>
      </ViroARScene>
    );
  }
}

ViroARTrackingTargets.createTargets({
  book : {
    source : require('./res/book.jpg'),
    orientatin: "Up",
    physicalWidth : 0.18 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 1000,
  },
});

module.exports = HelloWorldSceneAR;
