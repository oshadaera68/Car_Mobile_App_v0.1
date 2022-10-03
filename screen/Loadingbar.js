import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';

 function Loadingbar() {
  return (
    <View>
      <Text>Loadingbar</Text>
      <Progress.Pie progress={0.4} size={50} />
    </View>
  );
}
export default Loadingbar;
