import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import {
  DANGER_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SMALL_SPACE,
  styles,
} from '../../../../assets';
import {IPrayer} from '../../../../entities/Prayer';
import {Checkbox, PrayerIcon} from '../../../ui';
import {UserIcon} from '../../../ui';

interface PrayerProps {
  prayer: IPrayer;
}

const cardColors = [DANGER_COLOR, PRIMARY_COLOR, SECONDARY_COLOR];

export const Prayer: React.FC<PrayerProps> = ({prayer}) => {
  const Mark = styled.View`
    width: 3px;
    height: 24px;
    border-radius: 10px;
    background-color: ${cardColors[
      Math.floor(Math.random() * cardColors.length)
    ]};
    margin-right: ${SMALL_SPACE};
  `;

  return (
    <View style={styles.prayerItemContainer}>
      <Mark />
      <Checkbox></Checkbox>
      <Text style={[styles.cardText, {marginRight: SMALL_SPACE, flex: 1}]}>
        {prayer?.title}
      </Text>
      <UserIcon width={20} height={17} />
      <Text style={[styles.cardSmallText, {marginRight: SMALL_SPACE}]}>3</Text>
      <PrayerIcon width={21} height={18} />
      <Text style={styles.cardSmallText}>127</Text>
    </View>
  );
};
