import React from 'react';
import {Image} from 'react-native';
import image from '../../assets/image.png';

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = () => {
  return (
    <Image
      source={image}
      style={{width: 40, height: 40, borderRadius: 40 / 2}}></Image>
  );
};
