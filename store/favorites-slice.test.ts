import favoritesReducer, { addFavorite, removeFavorite } from './favorites-slice';

describe('Favorites Slice', () => {
  it('should add a favorite character', () => {
    const initialState = { characters: [] };
    const character = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'rick.jpg',
    };

    const state = favoritesReducer(initialState, addFavorite(character));

    expect(state.characters).toHaveLength(1);
    expect(state.characters[0].name).toBe('Rick Sanchez');
  });

  it('should remove a favorite character', () => {
    const initialState = {
      characters: [
        { id: 1, name: 'Rick', status: 'Alive', species: 'Human', image: 'rick.jpg' },
      ],
    };

    const state = favoritesReducer(initialState, removeFavorite(1));

    expect(state.characters).toHaveLength(0);
  });

  it('should not add duplicate favorites', () => {
    const initialState = { characters: [] };
    const character = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'rick.jpg',
    };

    let state = favoritesReducer(initialState, addFavorite(character));
    state = favoritesReducer(state, addFavorite(character));

    expect(state.characters).toHaveLength(1);
  });
});
