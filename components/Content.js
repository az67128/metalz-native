import React from "react";
import { FlatList, View, Text } from "react-native";
import style from "../style/Content";
import { observer, inject } from "mobx-react";
import Album from "./Album";
import Loader from "./Loader";

class TopBar extends React.Component {
  keyExtractor = (item, index) => item.album_id.toString();
  render() {
    const { albumList, isLoading } = this.props.store;
    return (
      <View style={style.content}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={albumList}
            renderItem={({ item }) => <Album album={item} />}
            keyExtractor={this.keyExtractor}
          />
        )}
      </View>
    );
  }
}

export default inject("store")(observer(TopBar));

{
  /* <View >
        {albums.map(album => (
          <Album key={album.album_id} album={album} />
        ))}
      </View> */
}
{
  /* <FlatList
          data={albums}
          renderItem={({ album }) => <Album key={album.album_id} album={album} />}
        /> */
}
