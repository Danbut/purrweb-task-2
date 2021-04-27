import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SMALL_SPACE, styles} from '../../../../assets';
import {IPrayer} from '../../../../interfaces/IPrayer';
import {PRAYER_DETAILS_SCREEN} from '../../../navigation/constants';
import {Checkbox, Mark, PrayerIcon} from '../../../ui';
import {UserIcon} from '../../../ui';

interface PrayerProps {
  prayer: IPrayer;
}

export const Prayer: React.FC<PrayerProps> = ({prayer}) => {
  const navigation = useNavigation();

  const openDetails = () => {
    navigation.navigate(PRAYER_DETAILS_SCREEN, prayer);
  };

  return (
    <TouchableOpacity style={styles.prayerItemContainer} onPress={openDetails}>
      <Mark />
      <Checkbox></Checkbox>
      <Text style={[styles.cardText, {marginRight: SMALL_SPACE, flex: 1}]}>
        {prayer?.title}
      </Text>
      <UserIcon width={20} height={17} />
      <Text style={[styles.cardSmallText, {marginRight: SMALL_SPACE}]}>3</Text>
      <PrayerIcon width={21} height={18} />
      <Text style={styles.cardSmallText}>127</Text>
    </TouchableOpacity>
  );
};
