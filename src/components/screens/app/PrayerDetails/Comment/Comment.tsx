import React from 'react';
import {Text, View} from 'react-native';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_SIZE,
  SECONDARY_TEXT_COLOR,
  SECONDARY_TEXT_SIZE,
  SMALL_SPACE,
} from '../../../../../assets';
import {Avatar} from '../../../../ui/Avatar';

interface CommentProps {
  name: string;
  createdAt: string;
  text: string;
}

export const Comment: React.FC<CommentProps> = ({name, createdAt, text}) => {
  return (
    <View style={{padding: CONTAINER_HORIZONTAL_PADDING, flexDirection: 'row'}}>
      <Avatar></Avatar>
      <View style={{paddingHorizontal: CONTAINER_HORIZONTAL_PADDING}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: PRIMARY_TEXT_SIZE,
              color: PRIMARY_TEXT_COLOR,
              fontWeight: '600',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: SECONDARY_TEXT_SIZE,
              color: SECONDARY_TEXT_COLOR,
              paddingLeft: SMALL_SPACE,
            }}>
            {createdAt}
          </Text>
        </View>
        <Text
          style={{
            fontSize: PRIMARY_TEXT_SIZE,
            color: PRIMARY_TEXT_COLOR,
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};
