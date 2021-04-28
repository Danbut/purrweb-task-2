import React from 'react';
import {Text, View} from 'react-native';
import {
  CONTAINER_HORIZONTAL_PADDING,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  styles,
} from '../../assets';

export interface InfoItemProps {
  value: string;
  title: string;
  link?: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({value, title, link}) => {
  return (
    <View
      style={{
        paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
        paddingVertical: 32,
      }}>
      <Text
        style={{
          color: SECONDARY_COLOR,
          fontSize: 22,
        }}>
        {value}
      </Text>
      <Text style={styles.cardSmallText}>{title}</Text>
      <Text style={[styles.link, {color: PRIMARY_COLOR, textAlign: 'auto'}]}>
        {link}
      </Text>
    </View>
  );
};
