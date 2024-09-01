const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          characters: [],
          planets: [],
          vehicles: [],
          favorites: {
              characters: [],
              planets: [],
              vehicles: []
          }
      },
      actions: {
          getCharacters: async () => {
              try {
                  const response = await fetch('https://www.swapi.tech/api/people/');
                  const data = await response.json();
                  setStore({ characters: data.results });
              } catch (error) {
                  console.error('Error fetching characters:', error);
              }
          },

          getPlanets: async () => {
              try {
                  const response = await fetch('https://www.swapi.tech/api/planets?page=1&limit=10');
                  const data = await response.json();
                  setStore({ planets: data.results });
              } catch (error) {
                  console.error('Error fetching planets:', error);
              }
          },

          getVehicles: async () => {
              try {
                  const response = await fetch('https://www.swapi.tech/api/vehicles?page=1&limit=10');
                  const data = await response.json();
                  setStore({ vehicles: data.results });
              } catch (error) {
                  console.error('Error fetching vehicles:', error);
              }
          },

          toggleFavorite: (type, uid) => {
              const store = getStore();
              const currentFavorites = store.favorites[type];

              const newFavorites = currentFavorites.includes(uid)
                  ? currentFavorites.filter(id => id !== uid)
                  : [...currentFavorites, uid];

              setStore({
                  favorites: {
                      ...store.favorites,
                      [type]: newFavorites
                  }
              });
          },

          removeFavorite: (type, uid) => {
              const store = getStore();
              const newFavorites = store.favorites[type].filter(id => id !== uid);
              setStore({
                  favorites: {
                      ...store.favorites,
                      [type]: newFavorites
                  }
              });
          }
      }
  };
};

export default getState;
