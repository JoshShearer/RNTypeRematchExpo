import React, {type PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import { store } from '#src/models/store';

import {Comps_layout_demo} from '#src/Comps/layout/demo/index';
import {Comps_layout_twDemo} from './src/Comps/layout/twDemo/index';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {


  return (
      <Provider store={store}>
        <Comps_layout_demo />
        {/* <Comps_layout_twDemo /> */}
      </Provider>
  );
};



export default App;
