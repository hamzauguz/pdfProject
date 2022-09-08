import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';

const PDFtoHTML = ({onPress}) => {
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  );
};

export default PDFtoHTML;
