import { types, flow } from "mobx-state-tree";
import Album from "./Album";
function get(year = new Date().getFullYear(), month = new Date().getMonth() + 1) {
  return fetch(`https://ws-dqs.wedeploy.io/?year=${year}&month=${month}`)
    .then(data => data.json())
    .then(res => res.body);
}

const Store = types
  .model("Store", {
    albums: types.array(Album),
    date: types.optional(types.Date, new Date()),
    isLoading: types.optional(types.boolean, false),
    sortByRating: types.optional(types.boolean, true),
    isYandexActive: types.optional(types.boolean, false),
    isGoogleActive: types.optional(types.boolean, false),
    genreFilter: types.optional(types.string, ""),
    isGenreSelect: types.optional(types.boolean, false),
  })
  .actions(self => {
    const store = self;
    const loadAlbums = flow(function* fetchProjects() {
      const date = store.date;
      store.isLoading = true;
      try {
        store.albums = yield get(date.getFullYear(), date.getMonth() + 1);
        store.isLoading = false;
      } catch (e) {
        store.isLoading = false;
      }
    });
    const afterCreate = () => {
      store.loadAlbums();
    };
    const changeMonth = delta => {
      const date = store.date;
      const moveTo = new Date(date.setMonth(date.getMonth() + delta));
      store.date = moveTo;
      store.loadAlbums();
    };
    const toggleFilter = prop => {
      store[prop] = !store[prop];
    };
    return {
      loadAlbums,
      toggleFilter,
      afterCreate,
      changeMonth,
    };
  })
  .views(self => {
    return {
      get albumList() {
        return self.albums
          .filter(album => {
            // const hateFilter = !self.hateList.includes(album.album_id);
            const yandexFilter = self.isYandexActive ? album.yandex_link : true;
            const googleFilter = self.isGoogleActive ? album.google_link : true;
            const genreFilter = self.genreFilter ? album.genre === self.genreFilter : true;
            // return hateFilter && yandexFilter && googleFilter && genreFilter;
            return yandexFilter && googleFilter && genreFilter;
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
          });
      },
    };
  });
export default Store;
