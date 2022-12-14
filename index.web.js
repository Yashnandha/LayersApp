import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import 'react-native-gesture-handler';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});