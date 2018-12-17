'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro360Image,
  Viro360Video,
  ViroAmbientLight,
  ViroAnimatedImage,
  ViroCamera,
  ViroFlexView,
  ViroImage,
  ViroParticleEmitter,
  ViroPolygon,
  ViroPolyline,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroUtils,
  ViroSkyBox
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
    
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}



module.exports = HelloWorldSceneAR;
