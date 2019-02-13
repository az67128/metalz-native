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
    return {
      loadAlbums,

      afterCreate,
      changeMonth,
    };
  });
export default Store;
