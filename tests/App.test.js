import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../App';
import AboutScreen from '../App';
import FavoritesScreen from '../App';
import { FavoritesContext } from '../App';

const Tab = createBottomTabNavigator();

const App = () => (
  <FavoritesContext.Provider value={{ favoriteMeals: [], addFavoriteMeal: jest.fn(), removeFavoriteMeal: jest.fn() }}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </FavoritesContext.Provider>
);

test('navigates between tabs', () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText('About'));
  expect(getByText('About my app')).toBeTruthy();

  fireEvent.press(getByText('Home'));
  expect(getByText('Corba')).toBeTruthy();

  fireEvent.press(getByText('Favorites'));
  expect(getByText('Favourite meals')).toBeTruthy();
});
