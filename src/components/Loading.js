// @flow

import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

type Props = {
  color: string,
};

function Loading(props: Props) {
  return (
    <View style={{ flex: 1 }}>
      <Spinner visible textStyle={{ color: props.color }} />
    </View>
  );
}

export default Loading;
