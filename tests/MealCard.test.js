import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MealCard from '../App';

const item = {
  strMeal: 'Test Meal',
  strMealThumb: 'https://via.placeholder.com/150',
  strCategory: 'Test Category',
  strArea: 'Test Area',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  strInstructions: 'Test instructions',
  liked: false,
};

test('renders correctly', () => {
  const { getByText, getByTestId } = render(<MealCard item={item} />);
  
  expect(getByText('Test Meal')).toBeTruthy();
  expect(getByText('Test Category')).toBeTruthy();
  expect(getByText('Test Area')).toBeTruthy();
  expect(getByTestId('meal-image')).toBeTruthy();
});

test('modal opens and closes correctly', () => {
  const { getByText, getByTestId, queryByText } = render(<MealCard item={item} />);

  fireEvent.press(getByText('Test Meal'));
  expect(getByText('Test instructions')).toBeTruthy();

  fireEvent.press(getByText('Close'));
  expect(queryByText('Test instructions')).toBeNull();
});

test('like button toggles correctly', () => {
  const { getByTestId } = render(<MealCard item={item} />);

  const likeButton = getByTestId('like-button');
  fireEvent.press(likeButton);
  expect(likeButton.props.source).toEqual(require('./assets/Liked.png'));
  fireEvent.press(likeButton);
  expect(likeButton.props.source).toEqual(require('./assets/Like.png'));
});
