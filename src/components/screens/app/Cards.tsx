import React from 'react';
// import {FlatList} from 'react-native-gesture-handler';
// import SwipeableItem from 'react-native-swipeable-item';
import {CONTAINER_HORIZONTAL_PADDING} from '../../../assets';
import {Container} from '../../ui';
import {Input} from '../../ui';

interface CardsProps {}

// const renderItem = () => {
//   return (
//     <SwipeableItem
//       key={item.key}
//       item={item}
//       ref={ref => {
//         if (ref && !this.itemRefs.get(item.key)) {
//           this.itemRefs.set(item.key, ref);
//         }
//       }}
//       onChange={({open}) => {
//         if (open) {
//           // Close all other open items
//           [...this.itemRefs.entries()].forEach(([key, ref]) => {
//             if (key !== item.key && ref) ref.close();
//           });
//         }
//       }}
//       overSwipe={20}
//       renderUnderlayRight={this.renderUnderlayRight}
//       snapPointsRight={[175]}></SwipeableItem>
//   );
// };

export const Cards: React.FC<CardsProps> = () => {
  return (
    <Container padding={CONTAINER_HORIZONTAL_PADDING}>
      <Input placeholder="Add a prayer..." icon></Input>
    </Container>
  );
};
