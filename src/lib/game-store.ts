export const getStoreName = (storeId: number) => {
  const store = gameStore.find((store) => store.id === storeId);
  return store ? store.name : 'Store not found';
};

export const gameStore = [
  {
    id: 1,
    name: 'Steam',
  },
  {
    id: 3,
    name: 'PlayStation Store',
  },
  {
    id: 2,
    name: 'Xbox Store',
  },
  {
    id: 4,
    name: 'App Store',
  },
  {
    id: 5,
    name: 'GOG',
  },
  {
    id: 6,
    name: 'Nintendo Store',
  },
  {
    id: 7,
    name: 'Xbox 360 Store',
  },
  {
    id: 8,
    name: 'Google Play',
  },
  {
    id: 9,
    name: 'itch.io',
  },
  {
    id: 11,
    name: 'Epic Games',
  },
];
