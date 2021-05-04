import React from 'react';
import {Container, Mark} from '../../../ui';
import {AddComment} from '../../../components/AddComment';
import {AddDescription} from '../../../components/AddDescription';
import {CommentsList} from '../../../components/CommentsList';
import {InfoBlock} from '../../../components/InfoBlock/InfoBlock';
import {useRoute} from '@react-navigation/core';
import {IPrayer} from '../../../interfaces/IPrayer';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface PrayerDetailsProps {}

export const PrayerDetails: React.FC<PrayerDetailsProps> = () => {
  const route = useRoute();
  const prayer = route.params as IPrayer;

  return (
    <Container padding={0}>
      <ScrollView>
        <MarkContainer>
          <Mark />
          <MarkText>Last prayed 8 min ago</MarkText>
        </MarkContainer>
        <InfoBlock />
        <AddDescription prayerId={prayer.id} />
        <CommentsList prayerId={prayer.id} />
      </ScrollView>
      <AddCommentContainer>
        <AddComment prayerId={prayer.id} />
      </AddCommentContainer>
    </Container>
  );
};

const MarkContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.spaces.container}px;
`;

const AddCommentContainer = styled.View`
  margin-bottom: ${({theme}) => theme.spaces.default};
`;

const MarkText = styled.Text`
  font-size: ${({theme}) => theme.size.primary};
  color: ${({theme}) => theme.colors.text.primary};
`;
