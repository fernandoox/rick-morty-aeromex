import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SearchInput from './SearchInput';
import charactersReducer from '@/store/characters-slice';

const createMockStore = () => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
  });
};

describe('SearchInput Component', () => {
  it('should render search input', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Find your character...');
    expect(input).toBeInTheDocument();
  });

  it('should render search icon', () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const container = screen.getByPlaceholderText('Find your character...').parentElement;
    expect(container).toBeInTheDocument();
  });
});
