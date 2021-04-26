import uuid from 'react-native-uuid';

export const infoItemData = [
  {
    id: uuid.v4(),
    value: 'July 25 2017',
    title: 'Date Added',
    link: 'Opened for 4 Days',
  },
  {
    id: uuid.v4(),
    value: '123',
    title: 'Times Prayed Total',
  },
  {
    id: uuid.v4(),
    value: '63',
    title: 'Times Prayed by Me',
  },
  {
    id: uuid.v4(),
    value: '60',
    title: 'Times Prayed by Others',
  },
];

export const comments = [
  {
    id: uuid.v4(),
    name: 'Anna Barber',
    text: 'Hey, Hey!',
    createdAt: '2 days ago',
  },
  {
    id: uuid.v4(),
    name: 'Hanna Barber',
    text: 'Hi!',
    createdAt: '2 days ago',
  },
  {
    id: uuid.v4(),
    name: 'Gloria Barber',
    text: 'How you doing?',
    createdAt: '2 days ago',
  },
];
