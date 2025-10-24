import { getCharacters } from './characters';

global.fetch = jest.fn();

describe('Characters Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch characters successfully', async () => {
    const mockResponse = {
      info: { count: 1, pages: 1 },
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        },
      ],
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await getCharacters(1);

    expect(result.results).toHaveLength(1);
    expect(result.results[0].name).toBe('Rick Sanchez');
  });

  it('should fetch characters with name filter', async () => {
    const mockResponse = {
      info: { count: 1, pages: 1 },
      results: [{ id: 1, name: 'Rick Sanchez' }],
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    await getCharacters(1, 'Rick');

    expect(global.fetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character?page=1&name=Rick'
    );
  });
});
