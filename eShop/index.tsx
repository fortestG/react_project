import {Platform, UIManager} from 'react-native';
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './components/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}