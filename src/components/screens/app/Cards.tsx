import React from 'react';
import {View} from 'react-native';
import SwipeableItem from 'react-native-swipeable-item';

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
  return <View></View>;
};
