import React from 'react';
import {Image} from 'react-native';

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = () => {
  return (
    <Image
      source={require('../../../assets/image.png')}
      style={{width: 40, height: 40, borderRadius: 40 / 2}}></Image>
  );
};
