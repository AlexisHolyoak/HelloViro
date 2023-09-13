import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroNode,
  ViroText,
} from '@viro-community/react-viro';
export default class ARScene extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: 'Initializing AR...',
    };
    this._onInitialized = this._onInitialized.bind(this);
  }
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
          <ViroAmbientLight color="#ffffff" />
          <ViroNode position={[0, -1, -1]} dragType="FixedToWorld" onDrag={() => {}}>
            <Viro3DObject
              source={require('../assets/hip_hop/hip_hop_anime_girl.vrx')}
              resources={[
                require('../assets/hip_hop/Atlas_75340.png'),
                require('../assets/hip_hop/body_texture.png'),
                require('../assets/hip_hop/F00_000_Face_00.png'),
              ]}
              position={[0, -20, -50]}
              scale={[0.001, 0.001, 0.001]}
              rotation={[90, 0, 0]}
              type="VRX"
              animation={{ run: true, loop: true }}
            />
          </ViroNode>
      </ViroARScene>
    );
  }
  _onInitialized() {
    this.setState({
      text: 'Hello World!',
    });
  }
}
var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
module.exports = ARScene;
