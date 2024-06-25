import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../App';
import { FavoritesContext } from '../App';

test('renders home screen with meal cards', () => {
  const { getByText } = render(
    <FavoritesContext.Provider value={{ favoriteMeals: [], addFavoriteMeal: jest.fn(), removeFavoriteMeal: jest.fn() }}>
      <HomeScreen />
    </FavoritesContext.Provider>
  );
  expect(getByText('Corba')).toBeTruthy();
});
