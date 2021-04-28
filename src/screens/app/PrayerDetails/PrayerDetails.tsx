import React from 'react';
import {Text, View} from 'react-native';
import {CONTAINER_HORIZONTAL_PADDING, styles} from '../../../assets';
import {Container, Mark} from '../../../ui';
import {AddComment} from '../../../components/AddComment';
import {AddDescription} from '../../../components/AddDescription';
import {CommentsList} from '../../../components/CommentsList';
import {InfoBlock} from '../../../components/InfoBlock/InfoBlock';

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
