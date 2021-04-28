import React from 'react';
import {Text, View} from 'react-native';
import {
  CONTAINER_HORIZONTAL_PADDING,
  DEFAULT_SPACE,
  styles,
} from '../../../assets';
import {Container, Mark} from '../../../ui';
import {AddComment} from '../../../components/AddComment';
import {AddDescription} from '../../../components/AddDescription';
import {CommentsList} from '../../../components/CommentsList';
import {InfoBlock} from '../../../components/InfoBlock/InfoBlock';
import {useRoute} from '@react-navigation/core';
import {IPrayer} from '../../../interfaces/IPrayer';
import {ScrollView} from 'react-native-gesture-handler';

interface PrayerDetailsProps {}

export const PrayerDetails: React.FC<PrayerDetailsProps> = () => {
  const route = useRoute();
  const prayer = route.params as IPrayer;

  return (
    <Container padding={0}>
      <ScrollView nestedScrollEnabled={true}>
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
        <AddDescription prayerId={prayer.id} />
        <CommentsList prayerId={prayer.id} />
      </ScrollView>
      <View style={{marginBottom: DEFAULT_SPACE}}>
        <AddComment prayerId={prayer.id} />
      </View>
    </Container>
  );
};
