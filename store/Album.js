import { types } from "mobx-state-tree";

const Album = types.model("Album", {
  album_id: types.number,
  author: types.string,
  title: types.string,
  cover_url: types.string,
  genre: types.string,
  lastfm_url: types.maybeNull(types.string),
  listeners: types.maybeNull(types.number),
  playcount: types.maybeNull(types.number),
  google_link: types.maybeNull(types.string),
  yandex_link: types.maybeNull(types.string),
});

export default Album;
