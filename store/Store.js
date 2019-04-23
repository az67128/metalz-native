import { types, flow } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import Album from './Album';
function get(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
  return fetch(`https://metalz.herokuapp.com/?year=${year}&month=${month}`)
    .then(data => data.json())
    .then(res => res.body);
}

const Store = types
  .model('Store', {
    albums: types.array(Album),
    date: types.optional(types.Date, new Date()),
    hateList: types.optional(types.array(types.number), []),
    isLoading: types.optional(types.boolean, false),
    sortByRating: types.optional(types.boolean, true),
    isYandexActive: types.optional(types.boolean, false),
    isGoogleActive: types.optional(types.boolean, false),
    genreFilter: types.optional(types.string, ''),
    isGenreSelect: types.optional(types.boolean, false),
    coverPreview: types.optional(types.string, ''),
    itemsLimit: types.optional(types.number, 10),
    searchString: types.optional(types.string, ''),
  })
  .actions(self => {
    const store = self;
    const changeSearchString = text => {
      store.searchString = text;
    };
    const loadAlbums = flow(function* loadAlbums() {
      store.itemsLimit = 10;
      const date = store.date;
      store.isLoading = true;
      try {
        store.albums = yield get(date.getFullYear(), date.getMonth() + 1);
        store.isLoading = false;
      } catch (e) {
        store.isLoading = false;
      }
    });
    const loadHateList = flow(function* loadHateList() {
      try {
        const hateList = yield AsyncStorage.getItem('hateList');
        store.hateList = hateList ? JSON.parse(hateList) : [];
      } catch (error) {
        //alert(error);
      }
    });

    const addToHateList = async album_id => {
      try {
        store.hateList.push(album_id);
        await AsyncStorage.setItem('hateList', JSON.stringify([...store.hateList, album_id]));
      } catch (error) {
        //alert(error);
      }
    };
    const afterCreate = () => {
      store.loadHateList();
      store.loadAlbums();
    };
    const changeMonth = delta => {
      const date = store.date;
      const moveTo = new Date(date.setMonth(date.getMonth() + delta));
      store.date = moveTo;
      store.searchString = '';
      store.loadAlbums();
    };
    const toggleFilter = prop => {
      store.itemsLimit = 10;
      store[prop] = !store[prop];
    };
    const togglePreview = url => {
      store.coverPreview = Boolean(url) ? url : '';
    };
    const selectGenre = genre => {
      store.genreFilter = genre;
      store.isGenreSelect = false;
    };
    const increaseItemsLimit = () => {
      store.itemsLimit += 10;
    };
    return {
      loadAlbums,
      toggleFilter,
      afterCreate,
      changeMonth,
      togglePreview,
      addToHateList,
      loadHateList,
      selectGenre,
      increaseItemsLimit,
      changeSearchString,
    };
  })
  .views(self => {
    return {
      get albumList() {
        return self.albums
          .filter(album => {
            const hateFilter = !self.hateList.includes(album.album_id);
            const yandexFilter = self.isYandexActive ? album.yandex_link : true;
            const googleFilter = self.isGoogleActive ? album.google_link : true;
            const genreFilter = self.genreFilter
              ? album.genre.toLowerCase().indexOf(self.genreFilter.toLowerCase()) > -1
              : true;
            const searchFilter = self.searchString
              ? album.author.toLowerCase().indexOf(self.searchString.toLowerCase()) > -1
              : true;
            return hateFilter && yandexFilter && googleFilter && genreFilter && searchFilter;
          })
          .sort((a, b) => {
            if (self.sortByRating) {
              return b.listeners - a.listeners;
            } else {
              if (a.author < b.author) {
                return -1;
              }
              if (a.author > b.author) {
                return 1;
              }
              return 0;
            }
          })
          .slice(0, self.itemsLimit);
      },
    };
  });
export default Store;
