import React from 'react';
import {
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import ARScene from './js/ArScene';

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: ARScene,
      }}
    />
  );
};
