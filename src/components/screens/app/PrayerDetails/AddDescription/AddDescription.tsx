import React from 'react';
import {Text, View} from 'react-native';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_COLOR,
  SECONDARY_TEXT_SIZE,
} from '../../../../../assets';
import {Input} from '../../../../ui';

interface AddDescriptionProps {}

export const AddDescription: React.FC<AddDescriptionProps> = () => {
  return (
    <View style={{padding: CONTAINER_HORIZONTAL_PADDING}}>
      <Text
        style={{
          fontSize: SECONDARY_TEXT_SIZE,
          color: PRIMARY_COLOR,
          textTransform: 'uppercase',
          fontWeight: '600',
          marginBottom: CONTAINER_HORIZONTAL_PADDING,
        }}>
        Description
      </Text>
      <Input />
    </View>
  );
};
