import React from 'react';
import {Text, View} from 'react-native';
import {CONTAINER_HORIZONTAL_PADDING, styles} from '../../../../assets';
import {Container, Mark} from '../../../ui';
import {AddComment} from './AddComment';
import {AddDescription} from './AddDescription';
import {CommentsList} from './CommentsList';
import {InfoBlock} from './InfoBlock/InfoBlock';

interface PrayerDetailsProps {}

export const PrayerDetails: React.FC<PrayerDetailsProps> = () => {
  return (
    <Container padding={0}>
      <View
        style={{
          flexDirection: 'row',
          padding: CONTAINER_HORIZONTAL_PADDING,
          alignItems: 'center',
        }}>
        <Mark />
        <Text style={styles.cardText}>Last prayed 8 min ago</Text>
      </View>
      <InfoBlock />
      <AddDescription />
      <CommentsList />
      <AddComment />
    </Container>
  );
};
